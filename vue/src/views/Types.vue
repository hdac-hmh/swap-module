<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<SpType modulePath="hdac-hmh.swapmodule.tokenswap" moduleType="SwapRequest"  />
		<SpType modulePath="hdac-hmh.swapmodule.voter" moduleType="Vote"  />
		<SpType modulePath="hdac-hmh.swapmodule.voter" moduleType="Poll"  />
		<SpType modulePath="hdac-hmh.swapmodule.blog" moduleType="Comment"  />
		<SpType modulePath="hdac-hmh.swapmodule.blog" moduleType="Post"  />
		<SpType modulePath="hdac-hmh.swapmodule.blogibc" moduleType="TimedoutPost"  />
		<SpType modulePath="hdac-hmh.swapmodule.blogibc" moduleType="SentPost"  />
		<SpType modulePath="hdac-hmh.swapmodule.blogibc" moduleType="Post"  />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Types'
}
</script>

