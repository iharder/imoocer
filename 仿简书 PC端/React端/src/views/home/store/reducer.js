import {fromJS} from 'immutable';
const defaultStore = fromJS({
    topicList: [
        {
            id: 1,
            title: "社会热点",
            imgUrl: "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|ima" +
                    "geView2/1/w/64/h/64"
        }, {
            id: 2,
            title: "手绘",
            imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|ima" +
                    "geView2/1/w/64/h/64"
        }
    ],
    articleList: [
        {
            id: 1,
            title: "咖啡小屋||说出来，但不强迫别人接受",
            desc: "这个世界上没有一种思想观点是完全正确的！越是伟大的思想越是被批判的体无完肤，甚至可以得出这样的结论:一种思想之所以伟大，就是因为有太多的人在骂！...",
            imgUrl: "//upload-images.jianshu.io/upload_images/6119991-7f7f142f0c903bad.jpg?imageMogr2" +
                    "/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            id: 2,
            title: "咖啡小屋||说出来，但不强迫别人接受",
            desc: "这个世界上没有一种思想观点是完全正确的！越是伟大的思想越是被批判的体无完肤，甚至可以得出这样的结论:一种思想之所以伟大，就是因为有太多的人在骂！...",
            imgUrl: "//upload-images.jianshu.io/upload_images/6119991-7f7f142f0c903bad.jpg?imageMogr2" +
                    "/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            id: 3,
            title: "咖啡小屋||说出来，但不强迫别人接受",
            desc: "这个世界上没有一种思想观点是完全正确的！越是伟大的思想越是被批判的体无完肤，甚至可以得出这样的结论:一种思想之所以伟大，就是因为有太多的人在骂！...",
            imgUrl: "//upload-images.jianshu.io/upload_images/6119991-7f7f142f0c903bad.jpg?imageMogr2" +
                    "/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            id: 4,
            title: "咖啡小屋||说出来，但不强迫别人接受",
            desc: "这个世界上没有一种思想观点是完全正确的！越是伟大的思想越是被批判的体无完肤，甚至可以得出这样的结论:一种思想之所以伟大，就是因为有太多的人在骂！...",
            imgUrl: "//upload-images.jianshu.io/upload_images/6119991-7f7f142f0c903bad.jpg?imageMogr2" +
                    "/auto-orient/strip|imageView2/1/w/300/h/240"
        }, {
            id: 5,
            title: "咖啡小屋||说出来，但不强迫别人接受",
            desc: "这个世界上没有一种思想观点是完全正确的！越是伟大的思想越是被批判的体无完肤，甚至可以得出这样的结论:一种思想之所以伟大，就是因为有太多的人在骂！...",
            imgUrl: "//upload-images.jianshu.io/upload_images/6119991-7f7f142f0c903bad.jpg?imageMogr2" +
                    "/auto-orient/strip|imageView2/1/w/300/h/240"
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
        }, {
            id: 2,
            imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
        }
    ]
});

export default(state = defaultStore, action) => {
    switch (action.type) {

        default:
            return state;
    }
}