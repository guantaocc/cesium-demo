/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./IntersectionTests-dbfba52c","./Plane-2bcb9154","./arrayRemoveDuplicates-2869246d","./BoundingRectangle-3d4f3d01","./EllipsoidTangentPlane-9c25b2da","./EllipsoidRhumbLine-6ca4b1e6","./earcut-2.2.1-b404d9e6","./PolygonPipeline-cc78b34e","./PolylineVolumeGeometryLibrary-ac3b176f","./EllipsoidGeodesic-db2069b3","./PolylinePipeline-65700d85"],function(d,c,t,u,y,h,e,i,r,f,g,v,n,o,a,m,b,l,s,p,E,P,_,C,k,D,w,L){function T(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,r=e.shapePositions;if(!d.defined(i))throw new c.DeveloperError("options.polylinePositions is required.");if(!d.defined(r))throw new c.DeveloperError("options.shapePositions is required.");this._positions=i,this._shape=r,this._ellipsoid=y.Ellipsoid.clone(d.defaultValue(e.ellipsoid,y.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,D.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*u.Cartesian3.packedLength;n+=1+r.length*y.Cartesian2.packedLength,this.packedLength=n+y.Ellipsoid.packedLength+2}T.pack=function(e,i,r){if(!d.defined(e))throw new c.DeveloperError("value is required");if(!d.defined(i))throw new c.DeveloperError("array is required");var n;r=d.defaultValue(r,0);var t=e._positions,o=t.length;for(i[r++]=o,n=0;n<o;++n,r+=u.Cartesian3.packedLength)u.Cartesian3.pack(t[n],i,r);var a=e._shape;for(o=a.length,i[r++]=o,n=0;n<o;++n,r+=y.Cartesian2.packedLength)y.Cartesian2.pack(a[n],i,r);return y.Ellipsoid.pack(e._ellipsoid,i,r),r+=y.Ellipsoid.packedLength,i[r++]=e._cornerType,i[r]=e._granularity,i};var G=y.Ellipsoid.clone(y.Ellipsoid.UNIT_SPHERE),R={polylinePositions:void 0,shapePositions:void 0,ellipsoid:G,height:void 0,cornerType:void 0,granularity:void 0};T.unpack=function(e,i,r){if(!d.defined(e))throw new c.DeveloperError("array is required");var n;i=d.defaultValue(i,0);var t=e[i++],o=new Array(t);for(n=0;n<t;++n,i+=u.Cartesian3.packedLength)o[n]=u.Cartesian3.unpack(e,i);t=e[i++];var a=new Array(t);for(n=0;n<t;++n,i+=y.Cartesian2.packedLength)a[n]=y.Cartesian2.unpack(e,i);var l=y.Ellipsoid.unpack(e,i,G);i+=y.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(r)?(r._positions=o,r._shape=a,r._ellipsoid=y.Ellipsoid.clone(l,r._ellipsoid),r._cornerType=s,r._granularity=p,r):(R.polylinePositions=o,R.shapePositions=a,R.cornerType=s,R.granularity=p,new T(R))};var V=new E.BoundingRectangle;return T.createGeometry=function(e){var i=e._positions,r=p.arrayRemoveDuplicates(i,u.Cartesian3.equalsEpsilon),n=e._shape;if(n=D.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(r.length<2||n.length<3)){k.PolygonPipeline.computeWindingOrder2D(n)===k.WindingOrder.CLOCKWISE&&n.reverse();var t=E.BoundingRectangle.fromPoints(n,V);return function(e,i){var r=new m.GeometryAttributes;r.position=new g.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,t,o=i.length,a=r.position.values.length/3,l=e.length/3/o,s=b.IndexDatatype.createTypedArray(a,2*o*(l+1)),p=0,d=(n=0)*o;for(t=0;t<o-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=o-1+d,s[p++]=d,d=(n=l-1)*o,t=0;t<o-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=o-1+d,s[p++]=d,n=0;n<l-1;n++){var c=o*n,u=c+o;for(t=0;t<o;t++)s[p++]=t+c,s[p++]=t+u}return new g.Geometry({attributes:r,indices:b.IndexDatatype.createTypedArray(a,s),boundingSphere:h.BoundingSphere.fromVertices(e),primitiveType:v.PrimitiveType.LINES})}(D.PolylineVolumeGeometryLibrary.computePositions(r,n,t,e,!1),n)}},function(e,i){return d.defined(i)&&(e=T.unpack(e,i)),e._ellipsoid=y.Ellipsoid.clone(e._ellipsoid),T.createGeometry(e)}});