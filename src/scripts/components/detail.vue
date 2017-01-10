<template>
	<div id="detail-box">
			<header>
				<router-link :to="'/'">
					<span class="yo-ico back">&#xe607;</span>
				</router-link>
				<span class="title"> 详情页 </span>
			</header>
			<section id="detail-content">
				{{$route.params.id}}
				
			</section>
	</div>
</template>
