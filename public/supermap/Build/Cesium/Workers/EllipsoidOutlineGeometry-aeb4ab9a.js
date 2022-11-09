define(["exports","./arrayFill-4513d7ad","./buildModuleUrl-57a32107","./Cartographic-3309dd0d","./ComponentDatatype-c140a87d","./when-b60132fc","./Check-7b2a090c","./Cartesian2-47311507","./GeometryAttribute-c42d25b7","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3"],(function(i,t,e,a,n,r,o,s,u,m,f,d,l){"use strict";var c=new a.Cartesian3(1,1,1),C=Math.cos,_=Math.sin;function h(i){i=r.defaultValue(i,r.defaultValue.EMPTY_OBJECT);var t=r.defaultValue(i.radii,c),e=r.defaultValue(i.innerRadii,t),n=r.defaultValue(i.minimumClock,0),o=r.defaultValue(i.maximumClock,l.CesiumMath.TWO_PI),s=r.defaultValue(i.minimumCone,0),u=r.defaultValue(i.maximumCone,l.CesiumMath.PI),m=Math.round(r.defaultValue(i.stackPartitions,10)),f=Math.round(r.defaultValue(i.slicePartitions,8)),d=Math.round(r.defaultValue(i.subdivisions,128));this._radii=a.Cartesian3.clone(t),this._innerRadii=a.Cartesian3.clone(e),this._minimumClock=n,this._maximumClock=o,this._minimumCone=s,this._maximumCone=u,this._stackPartitions=m,this._slicePartitions=f,this._subdivisions=d,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}h.packedLength=2*a.Cartesian3.packedLength+8,h.pack=function(i,t,e){return e=r.defaultValue(e,0),a.Cartesian3.pack(i._radii,t,e),e+=a.Cartesian3.packedLength,a.Cartesian3.pack(i._innerRadii,t,e),e+=a.Cartesian3.packedLength,t[e++]=i._minimumClock,t[e++]=i._maximumClock,t[e++]=i._minimumCone,t[e++]=i._maximumCone,t[e++]=i._stackPartitions,t[e++]=i._slicePartitions,t[e++]=i._subdivisions,t[e]=r.defaultValue(i._offsetAttribute,-1),t};var p=new a.Cartesian3,y=new a.Cartesian3,v={radii:p,innerRadii:y,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};h.unpack=function(i,t,e){t=r.defaultValue(t,0);var n=a.Cartesian3.unpack(i,t,p);t+=a.Cartesian3.packedLength;var o=a.Cartesian3.unpack(i,t,y);t+=a.Cartesian3.packedLength;var s=i[t++],u=i[t++],m=i[t++],f=i[t++],d=i[t++],l=i[t++],c=i[t++],C=i[t];return r.defined(e)?(e._radii=a.Cartesian3.clone(n,e._radii),e._innerRadii=a.Cartesian3.clone(o,e._innerRadii),e._minimumClock=s,e._maximumClock=u,e._minimumCone=m,e._maximumCone=f,e._stackPartitions=d,e._slicePartitions=l,e._subdivisions=c,e._offsetAttribute=-1===C?void 0:C,e):(v.minimumClock=s,v.maximumClock=u,v.minimumCone=m,v.maximumCone=f,v.stackPartitions=d,v.slicePartitions=l,v.subdivisions=c,v.offsetAttribute=-1===C?void 0:C,new h(v))},h.createGeometry=function(i){var a=i._radii;if(!(a.x<=0||a.y<=0||a.z<=0)){var o=i._innerRadii;if(!(o.x<=0||o.y<=0||o.z<=0)){var c=i._minimumClock,h=i._maximumClock,p=i._minimumCone,y=i._maximumCone,v=i._subdivisions,b=s.Ellipsoid.fromCartesian3(a),k=i._slicePartitions+1,A=i._stackPartitions+1;(k=Math.round(k*Math.abs(h-c)/l.CesiumMath.TWO_PI))<2&&(k=2),(A=Math.round(A*Math.abs(y-p)/l.CesiumMath.PI))<2&&(A=2);var x=0,P=1,M=o.x!==a.x||o.y!==a.y||o.z!==a.z,w=!1,g=!1;M&&(P=2,p>0&&(w=!0,x+=k),y<Math.PI&&(g=!0,x+=k));var V,G,E,O,D=v*P*(A+k),I=new Float64Array(3*D),z=2*(D+x-(k+A)*P),L=d.IndexDatatype.createTypedArray(D,z),T=0,R=new Array(A),N=new Array(A);for(V=0;V<A;V++)O=p+V*(y-p)/(A-1),R[V]=_(O),N[V]=C(O);var B=new Array(v),S=new Array(v);for(V=0;V<v;V++)E=c+V*(h-c)/(v-1),B[V]=_(E),S[V]=C(E);for(V=0;V<A;V++)for(G=0;G<v;G++)I[T++]=a.x*R[V]*S[G],I[T++]=a.y*R[V]*B[G],I[T++]=a.z*N[V];if(M)for(V=0;V<A;V++)for(G=0;G<v;G++)I[T++]=o.x*R[V]*S[G],I[T++]=o.y*R[V]*B[G],I[T++]=o.z*N[V];for(R.length=v,N.length=v,V=0;V<v;V++)O=p+V*(y-p)/(v-1),R[V]=_(O),N[V]=C(O);for(B.length=k,S.length=k,V=0;V<k;V++)E=c+V*(h-c)/(k-1),B[V]=_(E),S[V]=C(E);for(V=0;V<v;V++)for(G=0;G<k;G++)I[T++]=a.x*R[V]*S[G],I[T++]=a.y*R[V]*B[G],I[T++]=a.z*N[V];if(M)for(V=0;V<v;V++)for(G=0;G<k;G++)I[T++]=o.x*R[V]*S[G],I[T++]=o.y*R[V]*B[G],I[T++]=o.z*N[V];for(T=0,V=0;V<A*P;V++){var U=V*v;for(G=0;G<v-1;G++)L[T++]=U+G,L[T++]=U+G+1}var F=A*v*P;for(V=0;V<k;V++)for(G=0;G<v-1;G++)L[T++]=F+V+G*k,L[T++]=F+V+(G+1)*k;if(M)for(F=A*v*P+k*v,V=0;V<k;V++)for(G=0;G<v-1;G++)L[T++]=F+V+G*k,L[T++]=F+V+(G+1)*k;if(M){var W=A*v*P,Y=W+v*k;if(w)for(V=0;V<k;V++)L[T++]=W+V,L[T++]=Y+V;if(g)for(W+=v*k-k,Y+=v*k-k,V=0;V<k;V++)L[T++]=W+V,L[T++]=Y+V}var J=new m.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:I})});if(r.defined(i._offsetAttribute)){var j=I.length,q=new Uint8Array(j/3),H=i._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;t.arrayFill(q,H),J.applyOffset=new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:q})}return new u.Geometry({attributes:J,indices:L,primitiveType:e.PrimitiveType.LINES,boundingSphere:e.BoundingSphere.fromEllipsoid(b),offsetAttribute:i._offsetAttribute})}}},i.EllipsoidOutlineGeometry=h}));
