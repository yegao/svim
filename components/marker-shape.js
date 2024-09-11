// import { append } from '../action';
// import defs from '../elements/container/defs';
// import marker from '../elements/container/marker';

// // 箭头形状
// // <defs>  
// //   <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">  
// //     <polygon points="0,0 10,3 0,6" fill="black" />
// //   </marker>  
// // </defs> 

// // 绘制一条线，应用箭头
// // <line x1="50" y1="100" x2="350" y2="100" stroke="black" stroke-width="2" marker-end="url(#arrow)" />  

// export function markerShape(shape, markerStartAttributes, markerEndAttributes) {
//     const _defs = new defs();
//     if (markerStartAttributes && markerStartAttributes.id) {
//         const _marker_start = new marker();
//         _marker_start.setAttributes(markerStartAttributes);
//         append(_defs, _marker_start);
//         shape.setAttribute('marker-start', 'url(#'+ markerStartAttributes.id +')')
//     }
//     if (markerStartAttributes && markerEndAttributes.id) {
//         const _marker_end = new marker();
//         _marker_end.setAttributes(markerEndAttributes);
//         append(_defs, _marker_end);
//         shape.setAttribute('marker-end', 'url(#'+ markerStartAttributes.id +')')
//     }
//     return shape;
// }