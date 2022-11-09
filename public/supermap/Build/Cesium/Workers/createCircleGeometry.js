define(["./Cartographic-3309dd0d","./Check-7b2a090c","./when-b60132fc","./EllipseGeometry-535ed164","./Cartesian2-47311507","./VertexFormat-6446fca0","./Math-119be1a3","./arrayFill-4513d7ad","./buildModuleUrl-57a32107","./Matrix4-cde86d0e","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./ComponentDatatype-c140a87d","./EllipseGeometryLibrary-cf69fd46","./GeometryAttribute-c42d25b7","./FeatureDetection-c3b71206","./GeometryAttributes-252e9929","./GeometryInstance-dbc9f4c4","./GeometryOffsetAttribute-fbeb6f1a","./GeometryPipeline-6d9322f0","./AttributeCompression-90851096","./EncodedCartesian3-f1396b05","./IndexDatatype-8a5eead4","./IntersectionTests-5e35c2ab","./Plane-ca0357f4"],(function(e,t,i,r,o,a,l,n,s,d,m,c,u,p,y,_,h,G,x,f,g,b,v,E,w,A){"use strict";function C(e){var t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}C.packedLength=r.EllipseGeometry.packedLength,C.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var M=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),F={center:new e.Cartesian3,radius:void 0,ellipsoid:o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new a.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return C.unpack=function(t,l,n){var s=r.EllipseGeometry.unpack(t,l,M);return F.center=e.Cartesian3.clone(s._center,F.center),F.ellipsoid=o.Ellipsoid.clone(s._ellipsoid,F.ellipsoid),F.height=s._height,F.extrudedHeight=s._extrudedHeight,F.granularity=s._granularity,F.vertexFormat=a.VertexFormat.clone(s._vertexFormat,F.vertexFormat),F.stRotation=s._stRotation,F.shadowVolume=s._shadowVolume,i.defined(n)?(F.semiMajorAxis=s._semiMajorAxis,F.semiMinorAxis=s._semiMinorAxis,n._ellipseGeometry=new r.EllipseGeometry(F),n):(F.radius=s._semiMajorAxis,new C(F))},C.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},C.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,l=t(r,o),n=i(r,o);return new C({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:l,height:n,vertexFormat:a.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(C.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=C.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=o.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),C.createGeometry(t)}}));