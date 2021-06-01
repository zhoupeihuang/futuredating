<template>
  <div></div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      login({ username: "tiantian12", password: "123456" })
        .then((res) => {
          const { data } = res;
          console.log("成功拿到值" + data);
        })
        .catch((error) => {
          console.log("失败");
        });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="less"></style>
