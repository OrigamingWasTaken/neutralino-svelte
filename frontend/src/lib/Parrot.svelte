<script lang="ts">
	import { os } from '@neutralinojs/lib';

	async function parrot() {
		os.execCommand('curl parrot.live',{background: true});
	}
</script>

<button on:click={parrot}> Parrot invasion! 🦜 </button>
