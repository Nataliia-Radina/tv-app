<script>
export default {
  name: 'ImageSrc',
  created () {
    this.defaultImageSrc = require('@/assets/default-image.jpg')
  },
  methods: {
    getImageSrc (image) {
      return image ? image.original : this.defaultImageSrc
    }
  }
}
</script>
