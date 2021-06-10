<template>
   <div id="testapp">
    
   <div>
       
       <el-input class="inputone" v-model="inputDepart" placeholder="部门名称"></el-input> &nbsp
       <el-button>查询</el-button>
        
          <!--  分配一个管理员给暂时空缺的即完成了修改 -->
          <el-dialog  title="修改" :visible.sync="distriVisible" width="50%">
               
                 
                  
                
                 <span slot="footer" class="dialog-footer">
                     <el-button @click="distriVisible = false;resetForm()">取 消</el-button>
                     <el-button type="primary"  @click="distriAdmin()">确 定</el-button>
                  </span>  
        </el-dialog>
     
       </div>
 
 
 <el-card class="box-card">
   <div slot="header" class="clearfix">
     <span>用户信息</span>
     <el-button style="float: right; padding: 3px 0" type="text"  @click="distriVisible=true;">修改</el-button>
   </div>
   <div  class="text item">
     {{'用户名： ' + tableData.username}}<br>
	 {{'手机：   ' + tableData.phone}} <br>
	 {{'邮箱：   ' + tableData.email}}
	 
   </div>
   
   
 </el-card>
 
 
 
 
<!-- <div class="block"> 

   <el-table  
    :data="tableData"
    border
    style="width: 100%" >

    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="150">
    </el-table-column>
    
    <el-table-column
      prop="username"
      label="用户名"
      width="120">
    </el-table-column>

    <el-table-column
      prop="phone"
      label="电话"
      width="120">
    </el-table-column>

    <el-table-column
      prop="email"
      label="邮箱"
      width="150">
    </el-table-column>
    
    
   
   <el-table-column
      fixed="right"
      label="操作"
      width="200">

      <template slot-scope="scope">
      
        <el-button    @click="handleClick(scope.row)" type="success" size="mini">修改</el-button>
        
        <el-button  @click="deleteDepartment(scope.row)" type="danger" size="mini">删除</el-button>
        

      </template>
    </el-table-column>
	
	
	
  </el-table> -->


 
  <!-- <el-pagination  
     class="mpage" 
    layout="prev, pager, next"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    @current-change = page
    >
  </el-pagination> -->
   <!-- 
       <el-pagination
	    class="mpage"
		layout="prev, pager, next"
		:current-page="currentPage"
		:page-size="pageSize"
		:total="total"
		@current-change = "page"
	   >
	   </el-pagination> -->

   </div>

   </div>
    
</template>

<script>

//import Hello from '../components/hello.vue' 

import Element from 'element-ui'

 export default {

    inject:['reload'],

    methods: {
       //搜索表格中数据....
       

      
      //删除该部门的信息
      deleteDepartment(row){

         this.$confirm('此操作将永久删除部门信息及其所有数字档案信息 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
            //发送请求
           this.$axios.get(this.dbURL+'/department/deleteDepartment?departId='+row.id,{
            headers:{
               "Authorization":localStorage.getItem("token")
            }
          }).then(res=>{
            console.log(res)

            this.reload();  //调用刷新方法

            this.$message({
            type: 'success',
            message: '删除成功!'
          });

          });

          
        }).catch(() => {
          //取消
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        
      },

      
         
               //将数据置空
       resetForm(formName) {
	           //this.$refs[formName].resetFields();
	      },

         handleClick(row) 
         {  
            this.distriVisible = true; 
            // this.getAdminForDistri();
            console.log(row);
            this.department_id = row.id
            
         },
         
      //查询全部立档部门的信息,这是只有超级管理员方可查询的信息，应该给予相应的token方可
      page(currentPage)
      {
          const _this = this
          this.$axios.get(this.dbURL+'/common-users/getCommonUser',{
            headers:{
              "Authorization":localStorage.getItem("token")
                 }
          }).then(res=>{
              console.log("common-user ******************************")
              console.log(res)
              
              _this.tableData = res.data.data
			  
			  console.log(res.data.data)
			  
			 
              // _this.currentPage = res.data.data.current
              // _this.total = res.data.data.total
              // _this.pageSize = res.data.data.size
             
          })
      }

    },
    created(){
        //页面一启动就调用方法page
        console.log("这里是page")
        this.page(1)
       
    },

    data() {
      return {
      //为部门分配管理员的修改
      distriVisible:false,
      department_id:'',  //部门的id，唯一编号
      adminUserName:'',  //管理员的用户名
      adminarray:[],

		 //添加了新的
		 inputDepart:'',
		 //
		  
        tableData:{}, 
		
        currentPage:1,
        total:1,
        pageSize:1,
		
		
        visible: false,  //删除的提示框
        
        dialogVisible:false,
        DepartForm: {        //这里是新增档案部门,这个也是必不可少的不然无法显示
          department: '',
          departId:'',
          username:''
        },
        DepartRules:{
              department:[
                 { required: true, message: '请输入部门名称', trigger: 'blur' },
                 { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
              ],
              departId:[
                 { required: true, message: '请输入全宗号名称', trigger: 'blur' },
                 { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
              ],
              username:[
                 { required: true, message: '请选择管理员的用户名称', trigger: 'blur' },
                 { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
              ]  
        }
        ,
         adminName:{
            account:'',
            nickname:''
         },
        value: ''  //值



      }
    }
}

</script>

<style>
   .inputone{
       width:205px;
       margin-top:3px;
   }
    .mpage{
      margin: 0 auto;
      text-align: center;
  }

 .el-dialog__header {
  background: #ecf5ff;

}


 .el-dialog__body{
  background-color: #eef1e9 !important;
}

 .el-dialog__footer {
  background-color: #fafaf6 !important;
}


 /* .box-card {
    width: 480px;
  } */
  
</style>