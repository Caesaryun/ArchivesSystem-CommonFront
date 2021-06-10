<template>
	
	  <div>
		   <div><h3>借阅申请</h3></div>
		   
	      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	        <el-form-item label="密码" prop="pass">
	          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
	        </el-form-item>
	        <el-form-item label="确认密码" prop="checkPass">
	          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
	        </el-form-item>
	        <el-form-item label="年龄" prop="age">
	          <el-input v-model.number="ruleForm.age"></el-input>
	        </el-form-item>
	        <el-form-item>
	          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
	          <el-button @click="resetForm('ruleForm')">重置</el-button>
	        </el-form-item>
	      </el-form>      
	     
	  </div>
	  
	  
</template>

<script>
	
	   export default{
	      data(){ 
	          return {
	                 ruleForm: {
	                         pass: '',
	                         checkPass: '',
	                         age: ''
	                       },
	                     
	            };
	        },
	      methods: {
			   //首先获取档案数据
			  
			  
	                getUrl(){
	                  let routeData = this.$router.resolve({ path: '/main_show' });
	                  window.open(routeData.href, '_blank');
	                },  
	       },
	      created(){
	      
	       },
	      components:{
	          // Hello 
	        }
	   }
</script>

<style>
</style>
