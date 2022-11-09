<template>
  <div id="app">
      <div class="CesiumViewer">
        <div id="cesiumContainer">
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import {
  Viewer,
  EllipsoidTerrainProvider,
  WebMapTileServiceImageryProvider,
  Cartesian3
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
//指北针插件
import CesiumNavigation from "cesium-navigation-es6";
let viewer
export default {
  name: "App",
  mounted(){
     viewer = new Viewer("cesiumContainer", {
        animation: false, //是否创建动画小器件，左下角仪表
        baseLayerPicker: false, //是否显示图层选择器
        fullscreenButton: true, //是否显示全屏按钮
        geocoder: true, //是否显示geocoder小器件，右上角查询按钮
        homeButton: false, //是否显示Home按钮
        infoBox: false, //是否显示信息框
        sceneModePicker: false, //是否显示3D/2D选择器
        selectionIndicator: false, //是否显示选取指示器组件
        timeline: false, //是否显示时间轴
        navigationHelpButton: false, //是否显示右上角的帮助按钮
        scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        clock: new Clock(), //用于控制当前时间的时钟对象
        selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
        // imageryProviderViewModels: createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
        selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
        // terrainProviderViewModels: createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
        terrainProvider: new EllipsoidTerrainProvider(), //地形图层提供者，仅baseLayerPicker设为false有意义
        // skyBox: new Cesium.SkyBox({
        //   sources: {
        //     positiveX: "Cesium-1.7.1/Skybox/px.jpg",
        //     negativeX: "Cesium-1.7.1/Skybox/mx.jpg",
        //     positiveY: "Cesium-1.7.1/Skybox/py.jpg",
        //     negativeY: "Cesium-1.7.1/Skybox/my.jpg",
        //     positiveZ: "Cesium-1.7.1/Skybox/pz.jpg",
        //     negativeZ: "Cesium-1.7.1/Skybox/mz.jpg"
        //   }
        // }), //用于渲染星空的SkyBox对象
        // fullscreenElement: document.body, //全屏时渲染的HTML元素,
        // useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
        // targetFrameRate: undefined, //使用默认render loop时的帧率
        // showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
        // automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
        contextOptions: {
          id: "cesiumCanvas",
          webgl: {
            preserveDrawingBuffer: true
          }
        } //传递给Scene对象的上下文参数（scene.options）
        // sceneMode: Cesium.SceneMode.SCENE3D, //初始场景模式
        // mapProjection: new Cesium.WebMercatorProjection(), //地图投影体系
        // dataSources: new Cesium.DataSourceCollection()
        //需要进行可视化的数据源的集合
      });
      //使用太阳作为光源，可以照亮地球。
      viewer.scene.globe.enableLighting = false;
      //关闭地面大气效果，（默认为开启状态）
      viewer.scene.globe.showGroundAtmosphere = false;
      //FPS 帧率显示
      viewer.scene.debugShowFramesPerSecond = true;
      //cesiumCanvas id 设置
      viewer.scene.canvas.id = "cesiumCanvas";

      viewer.imageryLayers.addImageryProvider(
        new WebMapTileServiceImageryProvider({
          url:
            "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=93d1fdef41f93d2211deed6d22780c48",
          layer: "tdtBasicLayer",
          style: "default",
          format: "image/jpeg",
          tileMatrixSetID: "GoogleMapsCompatible",
          show: false,
          maximumLevel: 16
        })
      );

      this.initNavigation()
  },
  methods: {
    initNavigation(){
      var options = {};
      // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
      options.defaultResetView = Rectangle.fromDegrees(80, 22, 130, 50);
      // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
      options.enableCompass = true;
      // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
      options.enableZoomControls = true;
      // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
      options.enableDistanceLegend = true;
      // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
      options.enableCompassOuterRing = true;
      CesiumNavigation(viewer, options);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.cesium-widget-credits {
  display: none !important;
  visibility: hidden !important;
}
body {
  background-color: rgba(0, 0, 0, 0.87);
}

.CesiumViewer {
  width: 100%;
  height: 100%;
  background: #333;
  position: relative;
  overflow: hidden;
}
 #cesiumContainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
