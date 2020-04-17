/*
 * @Author: liar
 * @Date: 2018-09-10 16:37:09
 * @Last Modified by: lich
 * @Last Modified time: 2020-04-17 18:01:57
 */
// const cloneDeep = require('lodash/cloneDeep');
const cloneDeep = item => JSON.parse(JSON.stringify(item));

export function setCookie(name, value, expireDays) {
  var exdate = new Date();

  expireDays = expireDays || 365;
  exdate.setDate(exdate.getDate() + expireDays);
  //  document.cookie = c_name + '=' + value + ((expireDays == null) ? '' : ';expires=' + exdate.toGMTString());
  document.cookie =
    name +
    '=' +
    value +
    (expireDays == null ? '' : ';expires=' + exdate.toGMTString());
}
/**
 * 读取cookies
 */
export function getCookie(name, defaultValue) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  var arr = document.cookie.match(reg);

  return arr ? unescape(arr[2]) : defaultValue;
}
export function clearCookie() {
  document.cookie = '';
}

/**获取location */
export function getLocalStorage(name, initValue) {
  let result = localStorage.getItem(name);

  if (!result && initValue) {
    localStorage.setItem(name, initValue);
    result = localStorage.getItem(name);
  }

  return result;
}

// export default foreachTree;

export const tree = (function() {
  function arrRemove(arr, fnc) {
    var removeStore = [];

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      if (fnc(element)) {
        arr.splice(index, 1);
        index--;
        removeStore.push(element);
      }
    }

    return removeStore;
  }

  function enhanceTree(branch, childName, level) {
    branch.$hasChildren = function() {
      var children = branch[childName];

      return children instanceof Array && children.length > 0;
    };

    branch.$level = level;

    // branch.$expanded = false;
    branch.$toggleExpanded = function(flag) {
      return (this.$expanded = flag === undefined ? !this.$expanded : flag);
    };
    branch.$isExpanded = function() {
      return this.$expanded;
    };

    // branch.$selected = false;
    branch.$toggleSelected = function(flag) {
      return (this.$selected = flag === undefined ? !this.$selected : flag);
    };
    branch.$isSelected = function() {
      return this.$selected;
    };
  }

  /**
   *
   * @param { Array } tree
   * @param { String } childName ? default children
   * @param {number} level ? default 0
   */
  function foreachTree(tree, childName, level) {
    if (tree instanceof Array) {
      if (!level) {
        level = 0;
      }
      if (!childName) {
        childName = 'children';
      }
      tree.forEach(function(branch) {
        enhanceTree(branch, childName, level);
        if (branch.$hasChildren()) {
          foreachTree(branch[childName], childName, level + 1);
        }
      });
    } else {
      throw new Error('数据必须为数组');
    }

    return tree;
  }
  /**通过id和pid生成属性解构 */
  function foreachTreeById(currentList, childName, allList) {
    childName = childName || 'children';
    if (typeof allList === 'undefined') {
      allList = currentList;
    }
    if (currentList instanceof Array) {
      for (let index = 0; index < currentList.length; index++) {
        const element = currentList[index];
        const children = arrRemove(allList, item => item.pid === element.id);

        if (children.length > 0) {
          foreachTreeById(children, childName, allList);
        }
        element[childName] = children;
      }

      return currentList;
    }
    throw new Error('数据必须为数组');
  }

  return {
    foreachTree: function(tree) {
      tree = cloneDeep(tree);

      return foreachTree(tree);
    },
    foreachTreeById: function(arr) {
      arr = cloneDeep(arr);

      return foreachTree(foreachTreeById(arr));
    },
  };
})();

/**
 * 数组分组
 * @param {Array} arr
 * @param {*} cszd 键值
 */
export function sortGroupByfnc(arr, cszd) {
  let temp = {};

  for (let index = 0; index < arr.length; index++) {
    let value = arr[index][cszd];

    if (temp[value]) {
      continue;
    }
    temp[value] = arr.filter(res => res[cszd] == value);
  }

  return temp;
}
/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1];

  if (!search) {
    return {};
  }

  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}',
  );
}

/**
 * json格式转树状结构
 * @param   {json}      json数据
 * @param   {String}    id的字符串
 * @param   {String}    父id的字符串
 * @param   {String}    children的字符串
 * @return  {Array}     数组
 */
// eslint-disable-next-line max-params
export function transDataIdPid(a, idStr, pidStr, chindrenStr) {
  var r = [];
  var hash = {};
  var id = idStr;
  var pid = pidStr;
  var children = chindrenStr;
  var i = 0;
  var j = 0;
  var len = a.length;

  for (; i < len; i++) {
    hash[a[i][id]] = a[i];
  }
  for (; j < len; j++) {
    var aVal = a[j];
    var hashVP = hash[aVal[pid]];

    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []);
      hashVP[children].push(aVal);
    } else {
      r.push(aVal);
    }
  }

  return r;
}
