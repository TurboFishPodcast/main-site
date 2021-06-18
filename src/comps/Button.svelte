<script>
	export let title = '', href = '', icon = '', style = '', click = () => {}, data = '', blank = false, inverted = false;
</script>

<style>
a {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  padding: 6px 12px;
  width: max-content;
  border-radius: 1000px;
  background-color: var(--primary-text);
  color: var(--primary-color);
  text-decoration: none;
  transition: 150ms ease-out;
}
a:hover {
  box-shadow: 0 4px 20px #00000044;
  transform: scale(1.1);
}
a:empty {
  display: none;
}
a.inverted {
  background-color: var(--primary-color);
  color: var(--primary-text);
}
img {
  display: block;
  margin-right: 6px;
  height: calc(1.2rem + 18px);
  border-radius: 1000px;
  text-decoration: none;
  transition: 150ms ease-out;
}
</style>

{#if href}
<a href={href} target={blank ? '_blank' : ''} class={inverted ? 'inverted' : ''} {style} on:click={click} data-text={data}>
	{#if icon}
	<img src={icon} alt="icon">
	<span><slot>{title}</slot></span>
	{:else}
	<slot>{title}</slot>
	{/if}
</a>
{/if}