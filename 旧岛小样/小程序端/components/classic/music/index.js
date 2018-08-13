import {
  classicBeh
} from '../classic-beh.js';
var app = getApp();
const mMgr = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
  },

  /**
   * 组件的初始数据
   * 播放音乐API
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png'
  },
  attached() {
    this._recoverStatus();
    this._monitorSwitch();
  },
  detached() {
    if (!mMgr.paused) {
      this.setData({
        playing: true
      })
      // wx.setStorageSync('playing', true)
      return;
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(e) {
      //图片要切换
      if (!this.properties.playing) {
        this.setData({
          playing: true
        })
        wx.setStorageSync('playing', true);
        console.log(wx.getStorageSync('playing'))
        mMgr.src = this.properties.src;
        mMgr.title = this.title;
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause();
      }
    },
    _recoverStatus() {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return;
      }
      if (mMgr.src == this.properties.src) {
        this.setData({
          playing: true
        })

      }
    },
    _monitorSwitch() {
      mMgr.onPlay(() => {
        this._recoverStatus();
      })
      mMgr.onPause(() => {
        this._recoverStatus();
      })
      mMgr.onStop(() => {
        this._recoverStatus();
      })
      mMgr.onEnded(() => {
        this._recoverStatus();
      })
    }
  }
})