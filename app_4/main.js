new Vue({
  el: "#app",
  data: {
    submissions: Seed.submissions
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  methods: {
    upvote(submisionId) {
      const submission = this.submissions.find(
        submission => submission.id === submisionId

      );
      submission.votes++;
    }
  }
});
