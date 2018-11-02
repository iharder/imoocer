import create from '../../../utils/create'

create({
  pure: true,
  externalClasses: ['list-class'],
  options: {
    multipleSlots: true
  },
  properties: {},
  data: {

  },
  ready: function() {
    let user = wx.getStorageSync('user');
    this.update({
      name: user.nick_name,
      src: user.face
    })

  },
  methods: {

  }
})