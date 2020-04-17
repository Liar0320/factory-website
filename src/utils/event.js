/**一个事件注册函数
 * @constructor
 */
function RegisterEvents() {
  /** 从数组中移除某个元素
   * @param {[]} arr
   * @param {*} target
   */
  var removeItemFromArr = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];

      if (element === target) {
        return arr.splice(i, 1)[0];
      }
    }

    return null;
  };

  var eventsStore = {
    click: [],
    dblclick: [],
    movingEvent: [],
    mousemovedone: [],
  };

  /** 注册事件函数
   * @param {'click'| 'dblclick' | 'movingEvent' | 'mousemovedone'} type
   * @param {Function} fnc params <{}>
   */
  this.on = function (type, fnc) {
    if (eventsStore[type] === undefined) {
      throw new Error('绑定的事件类型不存在');
    }
    if (typeof fnc !== 'function') {
      throw new Error('绑定的事件不是可执行函数');
    }
    eventsStore[type].push(fnc);
  };

  /** 移除事件函数
   * @param {'click'| 'dblclick' | 'movingEvent' | 'mousemovedone'} type
   * @param {Function} fnc
   */
  this.off = function (type, fnc) {
    if (type && eventsStore[type] === undefined) {
      throw new Error('绑定的事件类型不存在');
    }
    if (type === undefined) {
      eventsStore = [];
    } else if (typeof fnc !== 'function') {
      eventsStore[type].length = 0;
    } else {
      removeItemFromArr(eventsStore[type], fnc);
    }
  };

  /** 移除事件函数
   * @param {'click'| 'dblclick' | 'movingEvent' | 'mousemovedone'} type
   * @param {{event:EventTarget}} info ?
   */
  this.emit = function (type, info) {
    if (eventsStore[type] === undefined) {
      throw new Error('绑定的事件类型不存在');
    }
    eventsStore[type].forEach((e) => e(info));
  };
}

/**绑定事件到dom节点上
 * @param { HTMLElement } dom
 */
function BindEventToDom(dom) {
  /**所有的事件容器 */
  const eventList = {};
  /**
   * @param {'click' | 'mousedown'} type
   */
  this.on = function (type, fnc) {
    if (notInList(type, fnc)) {
      eventList[type].push(fnc);
    }
    dom.addEventListener(type, fnc);
  };

  /**
   * @param {'click' | 'mousedown'} type
   */
  this.off = function (type, fnc) {
    if (typeof fnc !== 'undefined') {
      if (notInList(type, fnc)) {
        return;
      } else {
        dom.removeEventListener(type, fnc);
        eventList[type].splice(eventList[type].indexOf(fnc), 1);
      }
    } else if (typeof type !== 'undefined') {
      removeEvent(type);
    } else {
      Object.keys(eventList).forEach((key) => {
        delete eventList[key];
        removeEvent(key);
      });
    }
  };

  function removeEvent(type) {
    let removeFnc = eventList[type].shift();
    while (removeFnc) {
      dom.removeEventListener(type, removeFnc);
      removeFnc = eventList[type].shift();
    }
  }

  function notInList(type, fnc) {
    if (eventList[type] instanceof Array) {
      return !eventList[type].includes(fnc);
    }
    eventList[type] = [];

    return true;
  }
}

/**提供事件系统 增加 单击 双击 移动 事件
 * @constructor
 * @param {JQuery<HTMLElement> } dom
 * @extends RegisterEvents
 */
function EventSystem(dom) {
  /**保存当前实例 */
  var instance = this;

  if (dom.JQuery) {
    dom = $(dom);
  } else {
    dom = new BindEventToDom(dom);
  }

  var mouseCtrl = generateMouseCtrl();

  /**鼠标按下时 注册鼠标移动函数 */
  dom.on('mousedown', function (e) {
    mouseCtrl.isdown = true;
    mouseCtrl.event = e;
    registerDownAfterListen();

    mouseCtrl.mouseDownTime = new Date();
    mouseCtrl.moveStartX = e.screenX;
    // console.log('mousedown');
  });

  /**在点击之后需要开启的所有监听 */
  function registerDownAfterListen() {
    dom.on('mousemove', mousemove);
    dom.on('mouseup', mouseup);
    dom.on('mouseleave', mouseleave);
  }

  /**注销所有因为Donw而注册的监听 */
  function cancelDownAfterListen() {
    dom.off('mousemove', mousemove);
    dom.off('mouseup', mouseup);
    dom.off('mouseleave', mouseleave);
  }

  function mousemove(e) {
    /**因为只有在mousedown的时候才会注册mousemove事件 所以无须 检测是否按下 */
    // if(mouseCtrl.isdown===false) return ;
    /**当前位置和上一次位置的差值 */
    var constantlyOffset =
      e.screenX - (mouseCtrl.moveEndX || mouseCtrl.moveStartX);

    mouseCtrl.moveEndX = e.screenX;
    if (Math.abs(mouseCtrl.moveX) > 20 && !mouseCtrl.ismoving) {
      mouseCtrl.ismoving = true;
    }
    if (mouseCtrl.ismoving) {
      instance.emit('movingEvent', {
        event: mouseCtrl.event,
        moveX: mouseCtrl.moveX,
        constantlyOffset: constantlyOffset,
      });
    }
    // console.log('mousemove');
  }
  /**@TODO:
   * 1.将点击事件也集成到mouseup上
   *      1.1 当mouseCtrl.ismoving为false且
   *      1.2 当mouseDiffTime < 150 即为一次有效点击
   *      1.3 如果不存在 clickId 开启一个延时点击函数 clickId  = excuteClick():async;
   *      1.4 如果存在 clickId 取消 clickId:async  执行 excuteDbclick();
   *  */
  function mouseup() {
    mouseCtrl.mouseUpTime = new Date();

    if (
      !mouseCtrl.ismoving &&
      mouseCtrl.mouseDiffTime < mouseCtrl.mouseDiffTimeMax
    ) {
      mouseCtrl.clickId ? dblclick() : singleClick();
    } else {
      /**这里如果触发了单击或者双击  因为 单击时有延时的 所以不应该直接释放mouseCtrl */
      instance.emit('mousemovedone', {
        event: mouseCtrl.event,
        moveX: mouseCtrl.moveX,
        // constantlyOffset: constantlyOffset,
      });
      mouseCtrl.isreleased = true;
    }
    cancelDownAfterListen();
    // console.log('mouseup');
  }

  function singleClick() {
    mouseCtrl.clickId = setTimeout(function () {
      instance.emit('click', { event: mouseCtrl.event });
      mouseCtrl.isreleased = true;
      //   console.log('singleClick');
    }, mouseCtrl.mouseDoubleClickTimeMax);
  }

  function dblclick() {
    if (mouseCtrl.clickId) {
      clearTimeout(mouseCtrl.clickId);
    }
    instance.emit('dblclick', { event: mouseCtrl.event });
    mouseCtrl.isreleased = true;
    console.log('dblclick');
  }

  function mouseleave() {
    cancelDownAfterListen();
    mouseCtrl.isreleased = true;
  }

  this.destroy = function () {
    this.off();
    try {
      cancelDownAfterListen();
    } catch (e) {
      console.log(e);
    }
    dom.off('mousedown');
    dom = null;
    mouseCtrl = null;
  };

  /**生成鼠标属性管理
   * @returns {{isdown:false,ismoving:false,isreleased:true,moveX:null,clickId:null,moveStartX,moveEndX,mouseDownTime,mouseUpTime,mouseDiffTime,mouseDiffTimeMax:150,mouseDoubleClickTimeMax:300}}   当鼠标释放的时候会重置所有 isdown:false ismoving:false moveX:null clickId:null
   * @summary isdown 基本无用
   */
  function generateMouseCtrl() {
    /**是否按下，是否移动，是否释放，鼠标移动的横向距离起始点，鼠标横向移动的重点 鼠标按下的初始时间  鼠标抬起的时间 */
    var isdown,
      ismoving,
      isreleased,
      moveStartX,
      moveEndX,
      mouseDownTime,
      mouseUpTime;
    var mouseCtrl = {
      /**触发事件的id 单击 */
      clickId: null,
      /**鼠标点击触发的window.event */
      event: null,
      /**鼠标横向移动的距离 */
      moveX: null,
      /**鼠标点击抬起的间隔时间 */
      mouseDiffTime: null,
      /**固定值 鼠标按下抬起是否时单击的时间最大值 */
      mouseDiffTimeMax: 150,
      /**固定值 两次鼠标抬起的最大时间间隔， 在其之内 则为双击 在其之位则为两次单击 */
      mouseDoubleClickTimeMax: 300,
    };

    function init() {
      isdown = false;
      ismoving = false;
      mouseCtrl.clickId = null;
      mouseCtrl.moveX = null;
      moveStartX = null;
      moveEndX = null;
      mouseDownTime = null;
      mouseUpTime = null;
      mouseCtrl.mouseDiffTime = null;
      mouseCtrl.event = null;
    }
    Object.defineProperty(mouseCtrl, 'isdown', {
      get: function () {
        return isdown;
      },
      /** @param {Boolean} bol */
      set: function (bol) {
        isdown = bol;
        isreleased = !bol;
      },
    });
    Object.defineProperty(mouseCtrl, 'isreleased', {
      get: function () {
        return isreleased;
      },
      /** @param {Boolean} bol */
      set: function (bol) {
        // if(bol === isreleased) return ;
        isreleased = bol;
        if (bol) {
          init();
        }
      },
    });
    Object.defineProperty(mouseCtrl, 'ismoving', {
      get: function () {
        return ismoving;
      },
      /** @param {Boolean} bol */
      set: function (bol) {
        if (isdown) {
          ismoving = bol;
        } else {
          ismoving = false;
        }
      },
    });
    Object.defineProperty(mouseCtrl, 'moveStartX', {
      get: function () {
        return moveStartX;
      },
      /** @param {number} startX */
      set: function (startX) {
        moveStartX = startX;
        moveEndX = 0;
      },
    });
    Object.defineProperty(mouseCtrl, 'moveEndX', {
      get: function () {
        return moveEndX;
      },
      /** @param {number} endX */
      set: function (endX) {
        if (typeof moveStartX !== 'number') {
          throw new Error('开始位置moveStartX必须为数字类型');
        }
        moveEndX = endX;
        mouseCtrl.moveX = moveEndX - moveStartX;
      },
    });
    Object.defineProperty(mouseCtrl, 'mouseDownTime', {
      get: function () {
        return mouseDownTime;
      },
      /** @param {number} mouseDownTime */
      set: function (downTime) {
        if (typeof downTime === 'number' || !(downTime instanceof Date)) {
          throw new Error('downTime必须为数字类型或者时间类型');
        }
        mouseDownTime = downTime;
      },
    });
    Object.defineProperty(mouseCtrl, 'mouseUpTime', {
      get: function () {
        return mouseUpTime;
      },
      /** @param {number} endX */
      set: function (upTime) {
        if (typeof upTime === 'number' || !(upTime instanceof Date)) {
          throw new Error('upTime必须为数字类型或者时间类型');
        }
        mouseUpTime = upTime;
        mouseCtrl.mouseDiffTime = mouseUpTime - mouseDownTime;
      },
    });
    mouseCtrl.isreleased = true;

    return mouseCtrl;
  }
}

EventSystem.prototype = new RegisterEvents();

export default EventSystem;
