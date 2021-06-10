<template>
     <div class="login-one-first">
		   <div id="login_head_to_back">
		      <a href="/"></a>
		   </div>
		  <div class="logint-bottom-operation">
			  <div class="surface_link">    
			       <h3>外部链接</h3> 
				   <p>  <a style="color:#409EFF;font-size: 4px;" href="https://www.saac.gov.cn/daj/index.shtml">中华人民共和国国家档案局</a> </p>
			  </div>
			  
		  </div>
		  
	  <div class="login-wrap">
		  <div class="head_back_head"></div>
        <div class="ms-login">
            <div class="ms-title">登录</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="account">
                    <el-input v-model="param.account" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter="submitForm()"
                    >
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">没有账号，点击<a href="#/register">注册</a></p>
            </el-form>
        </div>
	
    </div>
	</div>
	
</template>

<script>
export default {
    data() {
        return {
            param: {
                account: "caesar",
                password: "123456"
            },
            rules: {
                account: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    created() {
        this.$store.commit("clearTags");
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
			
                if (valid) {
                        
                		
                		   const _this= this
                		  
                		   this.$axios.post(this.dbURL+'/common-users/login',this.param).then(res=>{
                
                			    console.log(res)
                			    const jwt = res.headers['authorization']
                				
                				console.log("jwttoken:")
                				console.log(jwt)
                
                				const userInfo = res.data.data
                			    _this.$store.commit("SET_TOKEN",jwt);  //保存token信息
                				_this.$store.commit("SET_USERINFO",userInfo)
                
                				const isexcute = 0  //0表示第一次执行
                                _this.$store.commit("SET_ISGETMENU",isexcute);
                
                                console.log("userInfo:")
                				console.log(_this.$store.getters.getUser)
                
                				this.$router.push("/home")
                				
                		   })
                		   
                          } else{
                            console.log('error submit!!');
                            return false;
                          }
            });
        }
    }
};
</script>

<style scoped>

.login-one-first{
	position: relative;
	/* position: fixed; */
	width: 100%;
	height:100%;
	/* background-image: url(../../assets/img/login-bg.jpg); */
	/* background-image: url(../../assets/img/BG.jpg); */
	background-size: 100%;
	overflow: auto;  
}

#login_head_to_back{
	 height: 40px;
}


#login_head_to_back a{

		       margin-top:1%;
			   margin-left: 3%;
		       display: block;
		       background: url(../../assets/img/MY-logo.png) no-repeat;
		       background-size: 100%;
		       width: 26%;
		       text-indent: -9000px;
		       height: 0;
		       padding-top: 13.1124%;
	
}

.logint-bottom-operation{
	width: 100%;
	height: 200px;
	/* background-color: ghostwhite; */
	position: absolute;
	top: 680px;
}

.surface_link{
	margin-left: 10%;
}

.surface_link p{
	line-height: 25px;
}

.login-wrap {
    position: relative;
    width: 100%;
    height:100%;
	/* background-image: url(../../assets/img/login-bg.jpg); */
	background-image: url(../../assets/img/sea.jpeg);
    background-size: 100%;
	margin-top: 2.7%;
}

.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 13px;
    line-height: 30px;
    color:white;
}
.login-tips a{
	color:#E6F1FE;
}

.login-tips a:hover{
	font-family: '楷体';
	font-size: 16px;
	background-color: #8CC5FF;
	color:black;
}

 #logo_one a{
	       width: 100%;
		   height: 100px;
		   background-color: #8CC5FF;
	       margin-top: 0%;
		   margin-left: 3%;
	       display: block;
	       background: url(../../assets/img/MY-logo.png) no-repeat;
	       background-size: 100%;
	       width: 33%;
	       text-indent: -9000px;
	       height: 0;
	       padding-top: 13.1124%;
		   
   }
   
</style>