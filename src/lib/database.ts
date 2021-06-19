export default {
	get: async (fetch, slug) => {
		return await fetch(`/posts/${slug}.md`);
	}
}