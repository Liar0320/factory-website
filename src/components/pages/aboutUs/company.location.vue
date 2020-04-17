<template>
  <div>
    <div ref="map" class="map"></div>
    <div ref="location" class="location" @click="location">
      <svg
        class="cursor"
        v-bind:title="$t('companyInfo.name')"
        t="1586422012341"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2780"
        width="24"
        height="24"
      >
        <path
          d="M511.968 0c-207.84 0-376.96 169.12-376.96 376.992 0 54.208 11.104 105.984 32.96 153.888 94.24 206.24 274.976 424 328.128 485.824 3.968 4.608 9.792 7.296 15.904 7.296s11.904-2.656 15.904-7.296c53.12-61.824 233.856-279.552 328.128-485.824 21.888-47.904 32.96-99.648 32.96-153.888-0.032-207.872-169.152-376.992-376.992-376.992zM511.968 572.8c-107.968 0-195.808-87.84-195.808-195.808s87.84-195.84 195.808-195.84 195.808 87.84 195.808 195.84c0 107.968-87.84 195.808-195.808 195.808z"
          p-id="2781"
          fill="#d81e06"
        ></path>
      </svg>
      <p class="location__label">
        {{ $t('companyInfo.name') }}
        <i class="el-icon-position more" @click="more"></i>
      </p>
    </div>
  </div>
</template>
<script>
import { Map, View, Overlay } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { XYZ } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { getCompanyInfo } from '../../apis';
export default {
  data() {
    return {
      mapCenter: { lat: 30.847349, lng: 120.91495 },
      normal: '',
      zoom: 15,
      keyword: '嘉善第二高级中学',
      /**@type {import("ol/Map").default} */
      map: null,
      mapUrl:
        'https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    };
  },
  async mounted() {
    this.getCompanyInfo();
  },
  methods: {
    async getCompanyInfo() {
      let companyInfo = await getCompanyInfo();

      this.mapCenter.latLng = companyInfo.latLng;
      this.keyword = companyInfo.keyword || companyInfo.address;

      this.map = new Map({
        target: this.$refs.map,
        view: new View({
          center: fromLonLat([this.mapCenter.lng, this.mapCenter.lat]),
          // projection: 'EPSG:4326',
          zoom: this.zoom,
        }),
        layers: [
          new TileLayer({
            source: new XYZ({
              url: this.mapUrl,
            }),
            // source: new OSM(),
          }),
        ],
        overlays: [
          new Overlay({
            element: this.$refs.location,
            position: fromLonLat([this.mapCenter.lng, this.mapCenter.lat]),
            positioning: 'bottom-center',
          }),
        ],
      });
    },
    location() {
      this.map.getView().animate({
        center: fromLonLat([this.mapCenter.lng, this.mapCenter.lat]),
        zoom: this.zoom,
      });
    },
    more() {
      let lonlat = fromLonLat([this.mapCenter.lng, this.mapCenter.lat]);

      let target = `https://map.baidu.com/search/${this.keyword}/@${lonlat[0]},${lonlat[1]},13z?querytype=s&wd=${this.keyword}`;

      window.open(
        target ||
          'https://map.baidu.com/poi//@13460383.11,3590788.13,13z?uid=cc0849a06b843351940319e6&info_merge=1&ugc_type=3&ugc_ver=1&querytype=detailConInfo&da_src=',
        '__blank',
      );
    },
  },
  watch: {
    '$i18n.locale'() {
      this.getCompanyInfo();
    },
  },
};
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 300px;
}
.location {
  &__label {
    padding: 0 5px;
    background-color: rgba(255, 255, 0, 0.7);
    border-radius: 5px;
    position: absolute;
    top: 2px;
    white-space: nowrap;
    left: 24px;
    line-height: 18px;
  }
  .more {
    color: blue;
    cursor: pointer;
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
