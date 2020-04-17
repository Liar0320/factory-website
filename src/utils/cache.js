/*
 * @Author: lich
 * @Date: 2020-04-03 11:25:42
 * @Last Modified by: lich
 * @Last Modified time: 2020-04-07 11:32:52
 * 制作一个缓存池
 * 功能：
 *
 *
 *  本地缓存 -->过期时间，
 *
 *  根据参数生成键值
 */
var STOETYPE;

(function(STOETYPE) {
  STOETYPE[(STOETYPE['date'] = 0)] = 'date';
  STOETYPE[(STOETYPE['string'] = 1)] = 'string';
  STOETYPE[(STOETYPE['number'] = 2)] = 'number';
  STOETYPE[(STOETYPE['object'] = 3)] = 'object';
})(STOETYPE || (STOETYPE = {}));
var Cache = /** @class */ (function() {
  function Cache() {
    this.isEnble = true;
    this.store = {};
    this.offsetExpire = 1000 * 60 * 60 * 24 * 1;
    this.isLocal = false;
    var lichCache = JSON.parse(localStorage.getItem('lichCache') || '{}');

    for (var key in lichCache) {
      if (lichCache.hasOwnProperty(key)) {
        var element = this.storeValueGetParse(lichCache[key]);

        if (element.expireTime < new Date().getTime()) {
          delete lichCache[key];
        } else {
          this.store[key] = element.value;
        }
      }
    }
    localStorage.setItem('lichCache', JSON.stringify(lichCache));
  }
  Cache.prototype.get = function(key, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    if (key === undefined || key === null) {
      return new Error('key is undefined pr null');
    }
    var storeKey = this.createKeyByAny(key);
    var value = this.store[storeKey];

    return value || defaultValue;
    // if (value && typeof value !== 'object') {
    //   try {
    //     return JSON.parse(value);
    //   } catch (error) {
    //     console.warn("value is can't parse" + error);
    //     return null;
    //   }
    // } else {
    //   return value || defaultValue;
    // }
  };
  Cache.prototype.set = function(key, value, isLocal) {
    if (isLocal === void 0) {
      isLocal = this.isLocal;
    }
    if (key === undefined || key === null) {
      return new Error('key is undefined pr null');
    }
    var storeKey = this.createKeyByAny(key);

    this.store[storeKey] = value;
    if (isLocal) {
      var storeValue = this.storeValueSetParse(value);
      var lichCache = JSON.parse(localStorage.getItem('lichCache') || '{}');

      lichCache[key] = storeValue;
      localStorage.setItem('lichCache', JSON.stringify(lichCache));
    }
  };
  Cache.prototype.createKeyByAny = function(key) {
    switch (typeof key) {
      case 'string':
        return key;
      case 'number':
        return String(key);
      case 'object':
        return JSON.stringify(key);
      default:
        new Error('key not exist');
    }
  };
  Cache.prototype.createExpireTime = function() {
    // return 1000 * 60 * 60 * 24 * 3;
    return this.offsetExpire || 1000 * 60 * 60 * 24 * 3;
  };
  Cache.prototype.storeValueSetParse = function(value) {
    var storeValue = {
      type: STOETYPE.string,
      value: null,
      expireTime: new Date().getTime() + this.createExpireTime(),
    };

    if (value instanceof Date) {
      storeValue.type = STOETYPE.date;
      storeValue.value = value.getTime();
    } else if (value instanceof String) {
      storeValue.type = STOETYPE.string;
      storeValue.value = value;
    } else if (typeof value === 'number') {
      storeValue.type = STOETYPE.number;
      storeValue.value = value;
    } else if (value instanceof Object) {
      storeValue.type = STOETYPE.object;
      storeValue.value = value;
    }

    return JSON.stringify(storeValue);
  };
  Cache.prototype.storeValueGetParse = function(value) {
    var storeValue = JSON.parse(value);

    switch (storeValue.type) {
      case STOETYPE.date:
        new Date(storeValue.value);
        break;
      case STOETYPE.number:
        Number(storeValue.value);
        break;
      default:
        storeValue.value;
    }

    return storeValue;
  };

  return Cache;
})();

export default Cache;
