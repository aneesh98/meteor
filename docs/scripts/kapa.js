hexo.extend.filter.register('after_render:html', function(html) {
  const scriptTag = `
<script async
  src="https://widget.kapa.ai/kapa-widget.bundle.js"
  data-website-id="64051b0e-d79f-4fe7-b3ca-ff5c84075693"
  data-project-name="Meteor"
  data-project-color="#101926"
  data-project-logo="https://avatars.githubusercontent.com/u/789528?s=200&v=4”
  data-modal-disclaimer=“This is a custom LLM for answering questions about Meteor. Answers are based on the contents of the docs, answered forum posts, YouTube videos and GitHub issues. Please note that answers are generated by AI and may not be fully accurate, so please use your best judgement."
></script>
`.trim();

  if (html.indexOf('</body>') !== -1) {
    return html.replace('</body>', scriptTag + '</body>');
  }

  return html;
});