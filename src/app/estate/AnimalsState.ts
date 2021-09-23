
// import { Injectable } from '@angular/core';
// import { Action, State, StateContext } from '@ngxs/store';
// import { FeedAnimals, ZebraFood,FeedZebra } from '../actions/FeedAnimals.actions';

// export interface ZoostateModel{
//     zebraFood: ZebraFood[];
// }



// @State<ZoostateModel>({
//     name: 'Zoo',
//     defaults: {
//         zebraFood: []
//     }
// })
// @Injectable()
// export class ZooState{
//     @Action(FeedZebra)
//     feedAnimals(ctx: StateContext<ZoostateModel>, action : FeedZebra) {
//         const state = ctx.getState();
//         ctx.setState({
//             ...state,
//             zebraFood: [
//                 ...state.zebraFood,
//                 action.zebraToFeed
//             ]
//         });

//     }
//  }