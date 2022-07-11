<template>
  <div class="carousel-item" :class="quoting.is_active">

    <blockquote class="brain-quote">
      <p class="mb-0 mb-2">{{ quoting.text }}</p>
      <footer>
        <a :href="quoting.reference.link" data-toggle="tooltip" :title="buildReference(quoting.reference, 'tooltip')" target="_blank" role="button">
          <img class="rounded-circle mr-2" :src="getPic(quoting.image)" />
          <span>{{ quoting.author }}</span>
          <cite v-html="buildReference(quoting.reference)"></cite>
        </a>
      </footer>
      <div class="btn-group mt-4 quote-btns" role="group" aria-label="Actions">
        <button class="btn btn-danger mb-2"><i class="fas fa-plus-circle pr-1"></i></button>
        <button class="btn btn-danger mb-2"><i class="far fa-heart"></i></button>
        <button class="btn btn-danger mb-2"><i class="fas fa-share"></i></button>
      </div>
    </blockquote>
  </div>
</template>
<script>
export default{
  props: ['quoting'],
  methods: {
    getPic(author_image) {
      return require('../imgs/authors/' + author_image + '.png');
    },
    buildReference(ref, isfor){
      if (!ref) return "";
      var ref_text = ref.text;
      if (isfor && isfor == "tooltip") return ref_text;

      var ref_icon = "";
      if (ref.type == "book") ref_icon = 'fas fa-book';
      if (ref.type == "youtube") ref_icon = 'fab fa-youtube'
      if (ref.type == "twitter") ref_icon = 'fab fa-twitter';
      if (ref_icon) ref_text = '<i class="'+ ref_icon +' pr-0 pl-1"></i><span class="d-none Xd-lg-inline-block">' + ref_text + "</span>";
      return ref_text;
    }
  },
  data(){
    return {

    }
  }
}
</script>
