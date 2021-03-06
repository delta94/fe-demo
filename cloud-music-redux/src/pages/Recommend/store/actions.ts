import {
  BannerListItem,
  RecommendListItem,
  AsyncAction,
} from '@/interfaces'
import * as actionTypes from './action-types';
import {
  ChangeBannerListAction,
  ChangeRecommendListAction,
  ChangeEnterLoadingAction,
} from './types';
import {
  getBannerRequest,
  getRecommendListRequest,
} from '@/services';
import { RootState } from '@/store';

export const changeBannerList = (payload: BannerListItem[]): ChangeBannerListAction => ({
  type: actionTypes.CHANGE_BANNER,
  payload,
});

export const changeRecommendList = (payload: RecommendListItem[]): ChangeRecommendListAction => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  payload,
});

export const changeEnterLoading = (payload: boolean): ChangeEnterLoadingAction => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  payload,
});

export const getBannerList = (): AsyncAction<
  RootState,
  ChangeBannerListAction
> => {
  return (dispatch) => {
    getBannerRequest().then((data: BannerListItem[]) => {
      dispatch(changeBannerList(data));
    }).catch(() => {
      console.log("轮播图数据传输错误");
    })
  }
};

export const getRecommendList = (): AsyncAction<
  RootState,
  ChangeRecommendListAction | ChangeEnterLoadingAction
> => {
  return (dispatch) => {
    getRecommendListRequest().then((data: RecommendListItem[]) => {
      dispatch(changeRecommendList(data));
      dispatch(changeEnterLoading(false)); // 改变 loading
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
};
