import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            className='banner-img'
                            src="//upload.jianshu.io/admin_banners/web_images/4345/7c956f527bc16d8e639c436dcbb806e99fc4142a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=""/>
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writer/>
                    </HomeRight>
                    {this.props.showScroll
                        ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                        : null}
                </HomeWrapper>
            </div>
        );
    }
    componentDidMount() {
        this
            .props
            .changeHomeData();
        this.bindEvents();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changScrollTopShow);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});
export default connect(mapState, mapDispatch)(Home);