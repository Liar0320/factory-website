<template>
  <div>
    <!-- <div slot="header" class="clearfix">
            <span>卡片名称</span>
            </div> -->
    <!-- <company-info></company-info> -->
    <!-- @click="onIconClick" -->
    <!-- 百度地图 -->
    <baidu-map
      class="map"
      :center="mapCenter"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-local-search
        :keyword="keyword"
        :auto-viewport="true"
        :select-first-result="true"
        :page-capacity="1"
      ></bm-local-search>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
      <!-- <bm-marker
        :position="{ lat: 30.847349, lng: 120.91495 }"
        animation="BMAP_ANIMATION_BOUNCE"
      >
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-map-type>
      
      </bm-marker> -->
      <!-- <bm-label
                content="我爱嘉善第二高级中学"
                :labelStyle="{ color: 'red', fontSize: '24px' }"
                :offset="{ width: -35, height: 30 }"
              /> -->
    </baidu-map>
  </div>
</template>
<script>
// import { getCompnayInfo } from '../../services/comany';
import { getCompanyInfo } from '../../apis';
const clone = require('lodash/cloneDeep');

export default {
  data() {
    return {
      mapCenter: { lat: 30.847349, lng: 120.91495 },
      normal: '',
      zoom: 15,
      keyword: '嘉善第二高级中学',
    };
  },
  mounted() {
    getCompanyInfo().then(res => {
      this.mapCenter = res.latLng;
      this.normal = clone(this.mapCenter);
    });
  },
  methods: {
    /**想实现一个点击图标复位 */
    // onIconClick() {
    //   this.mapCenter = { lat: 25.847349, lng: 100.91495 };
    //   setTimeout(() => {
    //     this.mapCenter = this.normal;
    //   }, 200);
    //   this.zoom = 15;
    //   console.log(arguments, this.mapCenter, this.normal);
    // },
  },
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 300px;
}
</style>
