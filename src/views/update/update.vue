<script setup lang='ts'>
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
  function goHome() {
  router.push('/')
}
</script>

 <style>
  body {
			margin: 0;
			padding: 0;
			background-color: #F5F5F5;
			font-family: Arial, sans-serif;
		}
		
		.container {
			max-width: 400px;
			margin: 0 auto;
			padding-top: 50px;
			text-align: center;
		}
		
		.qr-code {
			max-width: 100%;
			height: auto;
			display: block;
			margin-bottom: 30px;
		}
		
		.instructions {
			font-size: 18px;
			margin-top: 20px;
			color: #666;
		}
		
		@media (max-width: 768px) {
			.instructions {
				font-size: 14px;
			}
		}

</style>

<template>
 <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>支付二维码</title>
</head>

<body>
	<div class="container">
		<img src="/src/assets/qrcode.png" alt="付款二维码" class="qr-code">
        <p class="instructions">请添加客服,升级VIP会员</p>
		<p class="instructions">包月39元,半年168元,一年298元</p>
        <p class="instructions">
            <NButton type="primary" @click="goHome">
             Go to Home
            </NButton>
        </p>
	</div>
</body>
</html>
</template>
