/*
 * @Author: lich
 * @Date: 2019-09-25 16:39:50
 * @Last Modified by: lich
 * @Last Modified time: 2019-10-10 17:11:26
 * @TODO:一个3d轮播效果
 * 1.实现一个动画
 *      1.1从 from角度 to角度的 旋转。  animateSystem.start(from,to) return status.start 默认from:0,to:无限。current
 *      1.2动画可以被暂停               animateSystem.pause()        return status.pause
 *      1.3动画旋转的方式应该为 current = current + speed * dir ;  animateSystem.setConfig({current,to,speed,dir,status:['pause','status']});
 *      1.4注册 animateSystem.callback 每一次current的改变都会调用该函数
 *      1.5结束动画                     animateSystem.cancel()       return 'dispose'
 *      1.6结束动画 都应该有一个回调函数
 *      综上动画应有的属性为 from to speed dir status:{'pause','start'}
 * 2.实现点击事件
 *      分析：需要的点击事件   单击  双击  拖拽（移动）
 *            通过mousedown ， mouseup ， mousemove ，mouseleave控制
 *            mouseCtrl：{
 *              isdown,   ---
 *              ismoving:true,
 *              isreleased:true, ---
 *              moveX:null,
 *              clickId:nill, 单击事件开启的定时id
 *            }
 *      2.0 当鼠标事件
 *             按下时 mousedown
 *               注册mousemove , mouseup 和 mouseleave
 *             抬起时 mouseup
 *               注销mousemove , mouseup 和 mouseleave， 判断事件类型<单击，双击，已触发的移动> 并且 清空所有按键信息
 *             离开时 mouseleavel
 *               注销mousemove , mouseup 和 mouseleave  并且 清空所有按键信息
 *      2.1 单击 mouseup事件下
 *              当鼠标不是在移动(mouseCtrl.ismoving为false)且
 *              当鼠标按下的和抬起的间隔小于一个值默认150毫秒 mouseDiffTime < 150 即为一次有效点击
 *              开启一个异步延迟的单击事件  延迟事件 默认为300毫秒 将事件id缓存下来
 *      2.2 双击 mouseup事件下
 *              触发同样的单击事件判断
 *              如果存在事件id则代表上一次单击还未执行， (那即这是150毫秒+300毫秒 之间的第二此点击  即为双击)
 *              取消事件id的执行(取消单击事件)
 *              触发双击事件
 *      2.3 移动 mousemove 事件下
 *              判断 鼠标按下的初始位置和当前位置的x距离如果(mouse.moveX) 大于 20
 *              触发移动事件
 */
/**动画系统  提供一个无限的从0~360的累加 或者 累减， 或者 指定到指定位置
 * @return
 */
function AnimateSystem() {
  var current = 0,
    to = null,
    from = null,
    /**如果设置了 to 则不能改变速度 以防不能精确计算不到暂停位置 */
    speed = 0,
    dir = 1,
    time = 16,
    animateId = 0;
  var instance = this;

  /**@type {'going'|'stop'} */
  var status = 'stop';

  /**改变当前的值 */
  function changeCurrent(__current) {
    current = __current ? __current : current + speed * dir;
    if (this.callback instanceof Function) {
      this.callback(current);
    }
    if (current >= 360) {
      current = current - 360;
    }
    if (typeof to === 'number') {
      if (Math.abs(current - to) < speed) {
        this.pause();
      }
    }
  }

  /**正真的循环 */
  function executeInstance() {
    animateId = window.requestAnimationFrame(executeInstance, time);
    changeCurrent.call(instance);
  }

  /**动画执行函数 */
  function execute() {
    /**在每一次执行一个动画之前先把前一次给注销 */
    cancelExcute();
    status = 'going';
    executeInstance();
  }
  /**取消动画函数 */
  function cancelExcute() {
    window.cancelAnimationFrame(animateId);
    status = 'stop';
  }

  /**动画开始
   * @param {number} __from default 0
   * @param {number} __to  default null
   */
  this.start = function(__from, __to) {
    // if(typeof __from !=='number') throw new Error("from参数必须为数字")
    // if(typeof __to !=='number') throw new Error("to参数必须为数字");
    from = typeof __from !== 'number' ? 0 : __from;
    current = from;
    to = typeof __to !== 'number' ? null : __from;
    execute();
  };

  this.play = function() {
    to = null;
    execute();
  };

  this.pause = function() {
    cancelExcute();
  };

  this.setConfig = function(parmas) {
    if (typeof parmas['current'] !== 'undefined') {
      current = parmas['current'];
    }
    if (typeof parmas['to'] !== 'undefined') {
      to = parmas['to'];
    }
    if (typeof parmas['from'] !== 'undefined') {
      from = parmas['from'];
    }
    if (typeof parmas['speed'] !== 'undefined') {
      speed = parmas['speed'];
    }
    if (typeof parmas['dir'] !== 'undefined') {
      dir = parmas['dir'];
    }
    if (typeof parmas['time'] !== 'undefined') {
      time = parmas['time'];
    }
    if (typeof parmas['status'] !== 'undefined') {
      status = parmas['status'];
    }
  };

  this.cancel = function() {
    cancelExcute();
  };

  this.handRotate = function(__current) {
    cancelExcute();
    current = __current;
    changeCurrent.call(this, current);
  };

  this.stopAt = function(__to) {
    if (typeof __to !== 'number') {
      throw new Error('目标位置必须为number类型');
    }
    if (current === __to) {
      return;
    }
    to = __to;
    if (status === 'stop') {
      execute();
    }
  };

  /**@param {'current'|'time'|'dir'|'to'} type */
  this.getConfig = function(type) {
    if (type === 'current') {
      return current;
    }
    if (type === 'time') {
      return time;
    }
    if (type === 'dir') {
      return dir;
    }
    if (type === 'to') {
      return to;
    }
  };

  /**每次改变的时候的回调函数
   * @param {number} current
   */
  this.callback = null;
}

/**一个事件注册函数
 * @constructor
 */
function RegisterEvents() {
  /** 从数组中移除某个元素
   * @param {[]} arr
   * @param {*} target
   */
  var removeItemFromArr = function(arr, target) {
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
    mousemovedone:[],
  };

  /** 注册事件函数
   * @param {'click'| 'dblclick' | 'movingEvent' | 'mousemovedone'} type
   * @param {Function} fnc params <{}>
   */
  this.on = function(type, fnc) {
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
  this.off = function(type, fnc) {
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
  this.emit = function(type, info) {
    if (eventsStore[type] === undefined) {
      throw new Error('绑定的事件类型不存在');
    }
    eventsStore[type].forEach(e => e(info));
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
    this.on = function (type,fnc) {
        if( notInList (type,fnc) ){
            eventList[type].push(fnc);
        }
        dom.addEventListener(type,fnc)
    }

    /**
     * @param {'click' | 'mousedown'} type
     */
    this.off = function (type,fnc) {
        if(typeof fnc !== 'undefined'){
            if(notInList (type,fnc)){
                return;
            }else{
                dom.removeEventListener(type,fnc)
                eventList[type].splice(eventList[type].indexOf(fnc),1)
            }
        }else if(typeof type !== 'undefined'){
            removeEvent(type);
        }else{
            Object.keys(eventList).forEach(key=>{
                delete eventList[key];
                removeEvent(key);
            })
        }
    }

    function removeEvent(type) {
        let removeFnc = eventList[type].shift();
        while (removeFnc) {
            dom.removeEventListener(type,removeFnc);
            removeFnc = eventList[type].shift();
        }
    }

    function notInList(type,fnc) {
        if(eventList[type] instanceof Array){
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
  
  if(dom.JQuery){
    dom = $(dom);
  }else{
    dom = new BindEventToDom(dom);
  }



  var mouseCtrl = generateMouseCtrl();

  /**鼠标按下时 注册鼠标移动函数 */
  dom.on('mousedown', function(e) {
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
    mouseCtrl.clickId = setTimeout(function() {
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

  this.destroy = function() {
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
      mouseDiffTimeMax:150,
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
      get: function() {
        return isdown;
      },
      /** @param {Boolean} bol */
      set: function(bol) {
        isdown = bol;
        isreleased = !bol;
      },
    });
    Object.defineProperty(mouseCtrl, 'isreleased', {
      get: function() {
        return isreleased;
      },
      /** @param {Boolean} bol */
      set: function(bol) {
        // if(bol === isreleased) return ;
        isreleased = bol;
        if (bol) {
          init();
        }
      },
    });
    Object.defineProperty(mouseCtrl, 'ismoving', {
      get: function() {
        return ismoving;
      },
      /** @param {Boolean} bol */
      set: function(bol) {
        if (isdown) {
          ismoving = bol;
        } else {
          ismoving = false;
        }
      },
    });
    Object.defineProperty(mouseCtrl, 'moveStartX', {
      get: function() {
        return moveStartX;
      },
      /** @param {number} startX */
      set: function(startX) {
        moveStartX = startX;
        moveEndX = 0;
      },
    });
    Object.defineProperty(mouseCtrl, 'moveEndX', {
      get: function() {
        return moveEndX;
      },
      /** @param {number} endX */
      set: function(endX) {
        if (typeof moveStartX !== 'number') {
          throw new Error('开始位置moveStartX必须为数字类型');
        }
        moveEndX = endX;
        mouseCtrl.moveX = moveEndX - moveStartX;
      },
    });
    Object.defineProperty(mouseCtrl, 'mouseDownTime', {
      get: function() {
        return mouseDownTime;
      },
      /** @param {number} mouseDownTime */
      set: function(downTime) {
        if (typeof downTime === 'number' || !(downTime instanceof Date)) {
          throw new Error('downTime必须为数字类型或者时间类型');
        }
        mouseDownTime = downTime;
      },
    });
    Object.defineProperty(mouseCtrl, 'mouseUpTime', {
      get: function() {
        return mouseUpTime;
      },
      /** @param {number} endX */
      set: function(upTime) {
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
