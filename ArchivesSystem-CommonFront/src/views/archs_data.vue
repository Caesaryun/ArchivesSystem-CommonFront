 
<template>
   <div id="testapp">
        
              <div >
				       <!-- 预约申请操作 -->
				         <el-dialog  title="预约申请"  :visible.sync="orderVisible"    :close-on-click-modal="false" width="76%">
				                  
				                  <el-form  :rules="CheckRules"  :inline="true"  :model="orderForm"   ref="orderForm"  label-width="110px">
				                  
				                <!-- <el-form-item label="材料名称" prop="title">
				                    <font>{{commentForm.title}}</font>
				         	            </el-form-item> -->
				                   <el-form-item  label="档案名称"  prop="title" >
				                      <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
				                      {{orderForm.title}}
				                   </el-form-item>
				         		  <br>
				         		  
				         		  
				                  <el-form-item  label="预计借阅时间" prop="borrowTime" >
				                      <el-select v-model="borrowTime"  style="width:200px" placeholder="时长">
				         			 <el-option
				                          v-for="item in  borrowItem"
				                          :key="item.value"
				                          :label="item.label"
				                          :value="item.value"
				                          >
				                          <span style="float: left">{{ item.label}}</span>
				                          <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.department }}</span> -->
				                        </el-option>
				                      
				                      </el-select>
				                  </el-form-item>
				         		 <br>
				         		 
				                 <el-form-item  label="预约/借阅理由"  prop="reason" >
				                    <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
				         		   <el-input style="width:310px;" type="textarea" v-model="reason"></el-input>
				         	    </el-form-item>
				                
				                </el-form>
				         
				               <span slot="footer" class="dialog-footer">
				                
				                  <el-button @click="orderVisible = false;reseteditForm('orderForm')">取 消</el-button>
				                  <el-button type="primary" icon="el-icon-circle-check"  @click="submitOrder">提交</el-button>
				               </span>  
				         
				         </el-dialog>  
				  
				  
                    <el-dialog  title="借阅申请"  :visible.sync="checkVisible"    :close-on-click-modal="false" width="76%">
                     
                     <el-form  :rules="CheckRules"  :inline="true"  :model="borrowForm"   ref="borrowForm"  label-width="100px">
                     
                   <!-- <el-form-item label="材料名称" prop="title">
                       <font>{{commentForm.title}}</font>
				            </el-form-item> -->
                      <el-form-item  label="档案名称"  prop="title" >
                         <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
                         {{borrowForm.title}}
                      </el-form-item>
					  <br>
					  
					  
                     <el-form-item  label="预计借阅时间" prop="borrowTime" >
                         <el-select v-model="borrowTime"  style="width:200px" placeholder="时长">
						 <el-option
                             v-for="item in  borrowItem"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value"
                             >
                             <span style="float: left">{{ item.label}}</span>
                             <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.department }}</span> -->
                           </el-option>
                         
                         </el-select>
                     </el-form-item>
					 <br>
					 
                    <el-form-item  label="借阅理由"  prop="reason" >
                       <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
					   <el-input style="width:300px;" type="textarea" v-model="reason"></el-input>
				    </el-form-item>
                   
                   </el-form>

                  <span slot="footer" class="dialog-footer">
                   
                     <el-button @click="checkVisible = false;reseteditForm('borrowForm')">取 消</el-button>
                     <el-button type="primary" icon="el-icon-circle-check"  @click="submitComment">提交</el-button>
                  </span>  
            
            </el-dialog>  
		
		    <!--  修改借阅申请  -->
		     <el-dialog  title="借阅申请修改"  :visible.sync="changeVisible"    :close-on-click-modal="false" width="76%">
		              
		              <el-form  :rules="CheckRules"  :inline="true"  :model="changeForm"   ref="changeForm"  label-width="100px">
		              
		            <!-- <el-form-item label="材料名称" prop="title">
		                <font>{{commentForm.title}}</font>
		     	            </el-form-item> -->
		               <el-form-item  label="档案编号"  prop="id" >
		                  <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
		                  {{changeForm.id}}
		               </el-form-item>
		     		  <br>
		     		  
		     		  
		              <el-form-item  label="预计借阅时间" prop="borrowTime" >
		                  <el-select v-model="changeForm.borrowTime"  style="width:200px" placeholder="时长">
		     			 <el-option
		                      v-for="item in  borrowItem"
		                      :key="item.value"
		                      :label="item.label"
		                      :value="item.value"
		                      >
		                      <span style="float: left">{{ item.label}}</span>
		                      <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{ item.department }}</span> -->
		                    </el-option>
		                  
		                  </el-select>
		              </el-form-item>
		     		 <br>
		     		 
		             <el-form-item  label="借阅理由"  prop="reason" >
		                <!-- <mavon-editor v-model="borrowForm.id"></mavon-editor> -->
		     		   <el-input style="width:300px;" type="textarea" v-model="changeForm.reason"></el-input>
		     	    </el-form-item>
		            
		            </el-form>
		     
		           <span slot="footer" class="dialog-footer">
		            
		              <el-button @click="changeVisible = false;reseteditForm('changeForm')">取 消</el-button>
		              <el-button type="primary" icon="el-icon-circle-check"  @click="submitChangeBorrow">提交</el-button>
		           </span>  
		     
		     </el-dialog>  
		
		
		
              </div>

  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button> -->
  <el-button @click="clearFilter">清除所有过滤器</el-button>
  
  <el-table  
    :data="tableData"
    border
    style="width: 100%" 
    ref="multipleTable"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
    :header-cell-style="{'text-align':'center'}"
    >

 
    <el-table-column
      type="selection"
      width="55"
      align="center"
      >     
    </el-table-column>


     <el-table-column type="expand">
            <template slot-scope="props">
        <el-form label-position="left"  class="demo-table-expand">
          
          </el-form-item>
          <el-form-item label="部门">
            <span>{{ props.row.departName }}</span>
          </el-form-item>
          <el-form-item label="题名">
            <span>{{ props.row.title}}</span>
          </el-form-item>
          <el-form-item label="材料名称">
            <span>{{ props.row.oldFilename }}</span>
          </el-form-item>
		  <el-form-item label="借阅状态">
		    <span>{{ props.row.borrowState }}</span>
		  </el-form-item>
        </el-form>
       </template>
     </el-table-column>

     <el-table-column
      prop="id"
      label="档案编号"
      width="75"
      align="center"
      show-overflow-tooltip
      >
    </el-table-column>
   
    <el-table-column
      prop="borrowState"
      label="借阅状态"
      width="70"
      align="center"
      show-overflow-tooltip
      >
    </el-table-column>
   
     
     <!--  设置一些标签用于选择的操作 -->
     <el-table-column
      prop="departName"
      label="部门"
      width="100"
      align="center"
      show-overflow-tooltip
      
      :filters=departMent_filters
      :filter-method="filterTag"
      filter-placement="bottom-end"
      >
      <template slot-scope="scope">
           <el-tag
           :type="scope.row.departName ==='学报编辑部'? 'primary':'success' "
           disable-transitions
           >
             {{scope.row.departName}}
           </el-tag>
      </template>
          
    </el-table-column>

    <el-table-column
      prop="taxonNo"
      label="分类号"
      width="70"
      align="center"
      show-overflow-tooltip
      >
    </el-table-column>

    <el-table-column
      prop="taxonTitle"
      label="分类名"
      width="70"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
   
    <el-table-column
      prop="oldFilename"
      label="附件名称"
      width="154"
      show-overflow-tooltip>
    </el-table-column> 


   <el-table-column
      prop="title"
      label="题名"
      width="100"
      align="center"
      show-overflow-tooltip>
    </el-table-column>

   <el-table-column
      prop="establishYear"
      label="归档年度"
      width="100"
      align="center"
      show-overflow-tooltip>
    </el-table-column>

     <el-table-column
      prop="pageNumber"
      label="页数"
      width="100"
      align="center"
      show-overflow-tooltip>
    </el-table-column>
  

    <el-table-column
      label="操作"
      width="190"
      
      show-overflow-tooltip
      >
      <template slot-scope="scope">
         <div > 
              <el-button  v-if="scope.row.enclosure" @click="previewFile(scope.$index,scope.row)" type="text" size="mini">查看附件</el-button>
              <el-button  v-if="scope.row.enclosure"  @click="downloadEnclosure(scope.row.id,scope.row)" type="text" size="mini">下载</el-button>
              <el-button  v-if="scope.row.borrowState==='可借' " @click="borrow(scope.$index,scope.row)" type="text" size="mini">借阅</el-button>
              <el-button  v-if="scope.row.borrowState==='已借出' " @click="archOrder(scope.$index,scope.row)" type="text" size="mini">预约</el-button>
         </div>

      </template>
    </el-table-column>

  </el-table>
  
   
   <el-pagination
     class="mpage" 
     layout="prev, pager, next"
	 :current-page="currentPage"
	 :page-size="pageSize"
	 @current-change = page
     :total="total">
	</el-pagination>
   </el-pagination>
   	

<!--  直接查询借阅信息，然后若是不通过则进行修改，可有审核中，未通过，及通过的数据
		       
		  -->
		  
         <div class="have_borrow_div" v-if="true">
			<el-card style="background-color:floralwhite">
			  <h2>&nbsp;&nbsp;&nbsp;&nbsp;已提交借阅/预约数据 </h2> 
			     <br>
				  <el-table
			        :data="borrowData"
			        border
			        style="width: 100%" 
			        ref="multipleTable"
			        tooltip-effect="dark"
			        @selection-change="handleSelectionChange"
			        :header-cell-style="{'text-align':'center'}"
			        >
			      
			       
			        <el-table-column
			          type="selection"
			          width="55"
			          align="center"
			          >     
			        </el-table-column>
			     
			      <el-table-column
			        prop="archId"
			        label="档案编号"
			        width="120"
			        align="center"
			        show-overflow-tooltip
			        >
			      </el-table-column>
			        
					<!-- <el-table-column
			          prop="id"
			          label="编号"
			          width="120"
			          align="center"
			          show-overflow-tooltip
			          >
			        </el-table-column> -->
			       
			        <el-table-column
			          prop="state"
			          label="审核状态"
			          width="130"
			          align="center"
			          show-overflow-tooltip
					  
					  :filters="[{ text: '排队中', value: '排队中' }, { text: '审核中', value: '审核中' },{text:'未通过',value:'未通过'},
					  {text:'成功',value:'成功'}]"
					   :filter-method="filterState"
					   filter-placement="bottom-end"
			          >
					  <template slot-scope="scope">
					          <el-tag
					            :type="scope.row.state === '未通过' || scope.row.state ==='排队中' ? 'danger' : 'success'"
					            disable-transitions>{{scope.row.state}}</el-tag>
					        </template>
			        </el-table-column>
			       
			       
			      
			        <el-table-column
			          prop="rankNo"
			          label="排队位次"
			          width="120"
			          align="center"
			          show-overflow-tooltip
			          >
			        </el-table-column>
			        
					<!-- <el-table-column
					  prop="archId"
					  label="档案编号"
					  width="120"
					  align="center"
					  show-overflow-tooltip
					  >
					</el-table-column> -->
					
					
				    
			        <el-table-column
			          prop="allowName"
			          label="审核人"
			          width="150"
			          align="center"
			          show-overflow-tooltip>
			        </el-table-column>
			       
				   
				   <el-table-column
			         prop="reviseComments"
			         label="审核意见"
			         width="200"
			         align="center"
			         show-overflow-tooltip>
			       </el-table-column>
			       			       
			     
			        <el-table-column
			          label="操作"
			          width="245"
			          align="center"
			          show-overflow-tooltip
			          >
			          <template slot-scope="scope">
			             <div >    <!-- 提供借阅表的 id 然后通过该id查询到 通过表的pdf文件得到数据 -->
						      <el-button  v-if="scope.row.state==='成功' "  @click="previewAccess(scope.$index,scope.row)" type="text" size="mini">预览</el-button>
						      <el-button  v-if="scope.row.state==='成功' "  @click="downloadAccess(scope.$index,scope.row)" type="text" size="mini">下载通知书</el-button>
			                  <el-button  v-if="scope.row.state==='未通过' " @click="changeBorrow(scope.$index,scope.row)" type="text" size="mini">修改</el-button>
			                  <el-button  v-if="scope.row.state==='未通过' " @click="archOrder(scope.$index,scope.row)" type="text" size="mini">删除</el-button>
			                              
						 </div>
			      
			          </template>
			        </el-table-column>
			      
				   
				  
				  
			      </el-table>
			      
			       
			       <el-pagination
			         class="mpageTwo" 
			         layout="prev, pager, next"
			      	 :current-page="borrowPage"
			      	 :page-size="borrowpageSize"
			      	 @current-change = getBorrowData
			         :total="borrowtotal"
					 >
			      	</el-pagination>
			       	<br>
		
					</el-card>
		  </div>
           
          
   
   </div>
   
   
</template>

<script>

import Element from 'element-ui'

export default{
   inject:['reload'],

   data(){ 
       return {
          
          tableData:{}, 
          currentPage:'',
          total:0,
          pageSize:1,
         
		  multipleSelection: [],
          checkVisible:false,
          reason:'', //借阅理由
		  borrowTime:'', //借阅时长
		  
          borrowForm:{
            id:'',  //档案id
			archId:'',  //档案id
			reason:'',
			borrowTime:'',
          },
		  
		  
          borrowData:{},
		  borrowPage:'',
          borrowpageSize:'',
		  borrowtotal:'',
          changeVisible:false,
          changeForm:{},
		  
		  
          departMent_filters:[ 
             {text:'学报编辑部',value:'学报编辑部'},
             {text:'学校办公室',value:'学校办公室'},
           ],
         
		 borrowItem:[
			 {label:'3天',value:'3'},
			 {label:'7天',value:'7'},
			 {label:'15天',value:'15'},
		 ],
		 orderVisible:false,
		 orderForm:{},
		 
		 
         };
     },
   methods: {
	   //下载通知书
	   downloadAccess(index,row)
	   {
		 
		 var accessPdfName = row.username + "-"+row.archId + "-"+"借阅审核通知书.pdf";
		 
		 this.$axios({
		   method:'GET',
		   url:this.dbURL+'/common-borrow/downloadAccess?borrowId='+row.id,
		   headers:{"Authorization":localStorage.getItem("token")},
		   responseType: 'blob'
		 }).then(res=>{
		       console.log("excute  downloadAccessFile ...")
		      
		       console.log(res)
			   
		       let a = document.createElement('a');
		       let blob = new Blob([res.data],{
		          type:'application/pdf'
		       }); 
			   
		       let objectUrl = URL.createObjectURL(blob);
		       a.setAttribute("href",objectUrl);
		       a.setAttribute("download",accessPdfName);
		       a.click()
		 
		 })
		 
	   },
	   //通知书
	   previewAccess(index,row){
		  
		   this.$axios({
		     method:'GET',
		     url:this.dbURL+'/common-borrow/previewAccess?borrowId='+row.id,
		     headers:{"Authorization":localStorage.getItem("token")},
		     //responseType: 'arraybuffer'
		     responseType: 'blob'
		   }).then(res=>{
		         console.log("excute preview access pdf ...")
		         console.log(res)
		   
		         let a = document.createElement('a');
		         let blob = new Blob([res.data],{
		            //type:'application/pdf'   //也是必不可少的
		            type:res.data.type
		         }); 
		         let objectUrl = window.URL.createObjectURL(blob);
		         window.open(objectUrl)
		         
		   })
	   },
	   //修改记录
	   changeBorrow(index,editPage)
	   {
		    
		      this.changeVisible = true
		      this.changeForm = Object.assign({},editPage)   //将表格中数据填充到新的表单中 editForm 中
		   
	   },
	   //提交修改
	   submitChangeBorrow(){
		   console.log(this.changeForm)
		 
		   //直接获取长度，若为0则说明为空
		   var length = Object.keys(this.changeForm.reason).length
		  
		   if(length === 0 || this.changeForm.borrowTime <1)
		   {
		     Element.Message.warning("理由不能为空！",{duration : 3*1000});
		     return 
		   }
		         
		   
		    this.$axios({
		       method:'GET',
		       url:this.dbURL+'/common-borrow/changeborrow',
		       headers:{"Authorization":localStorage.getItem("token")},
		       // params:{
		       //   archid:this.commentForm.id,
		       //   revisecomments:this.commentForm.reviseComments
		       // },
		   	  params:this.changeForm,
		      }).then(res=>{
		            
		           console.log(res)
		   		   Element.Message.success("修改成功！",{duration : 4*1000});
		   		   this.reload();
		           
		     })
		    
		     this.changeVisible = false
	   },
	   
	  //获取借阅记录数据
	   getBorrowData(borrowPage){
		   
		   const _this = this
			   
		   this.$axios.get(this.dbURL+'/common-borrow/getForone?borrowPage='+borrowPage,{
			   headers:{"Authorization":localStorage.getItem("token")}
		   }).then(res=>{
		       
		   			this.borrowData = res.data.data.records
					this.borrowtotal = res.data.data.total
					this.borrowpageSize = res.data.data.size
					
		            console.log(res)
		      
		   
		   })
	   },
	   
	   
     //取消
     reseteditForm(){
          this.commentForm.reviseComments = '';
     },
     //提交借阅申请
     submitComment(){
       
        console.log(this.borrowForm)
		
        //直接获取长度，若为0则说明为空
        var length = Object.keys(this.reason).length
		var borrowLength = Object.keys(this.borrowTime).length
		
        if(length === 0 || borrowLength === 0)
        {
          Element.Message.warning("理由或预计时长不能为空！",{duration : 3*1000});
          return 
        }
       
	    this.borrowForm.reason = this.reason;
	    this.borrowForm.borrowTime = this.borrowTime
		this.borrowForm.archId = this.borrowForm.id   //这个id是档案表赋值而来的
	    this.borrowForm.id = '' //将这个id置空，这个id是数据库中自增的id主键
		
         this.$axios({
            method:'GET',
            url:this.dbURL+'/common-borrow/borrow',
            headers:{"Authorization":localStorage.getItem("token")},
            // params:{
            //   archid:this.commentForm.id,
            //   revisecomments:this.commentForm.reviseComments
            // },
			params:this.borrowForm,
           }).then(res=>{

                console.log(res)
				if(res.data.data === "havedone")
				{
				
				  Element.Message.warning("该档案已提交过借阅申请，请耐心等待审核",{duration : 4*1000});
				  	
				}   //表示是第一个人借阅该档案
				else if(res.data.data === 'okone')
				{
					Element.Message.success("恭喜你，成为了第一个借阅该档案的用户！",{duration : 4*1000});
					
					this.borrowForm.borrowTime = ''  //执行完了才清空
					this.borrowForm.reason = ''  
					this.borrowTime = ''
					this.reason = ''
				}
				else if(res.data.data === "oktwo"){
					 //表示当前为第一个
					 Element.Message.success("恭喜你，成功排队第一！",{duration : 4*1000});
					 this.borrowForm.borrowTime = ''  //执行完了才清空
					 this.borrowForm.reason = ''  
					 this.borrowTime = ''
					 this.reason = ''
				}
				else if(res.data.data === "okthree")
                 {
					 Element.Message.success("提交成功！",{duration : 4*1000});
					 
					 this.borrowForm.borrowTime = ''  //执行完了才清空
					 this.borrowForm.reason = ''  
					 this.borrowTime = ''
					 this.reason = ''
				 }
				this.reload();
                
          })
         
          this.checkVisible = false
     },
     //预约操作
	 //提交预约操作
	 submitOrder(){
		 
		 
		 //直接获取长度，若为0则说明为空
		 var length = Object.keys(this.reason).length
		 var borrowLength = Object.keys(this.borrowTime).length
		 
		 if(length === 0 || borrowLength === 0)
		 {
		   Element.Message.warning("理由或预计时长不能为空！",{duration : 3*1000});
		   return 
		 }
		        
		 this.orderForm.reason = this.reason;
		 this.orderForm.borrowTime = this.borrowTime
		 this.orderForm.archId = this.orderForm.id   //这个id是档案表赋值而来的
		 this.orderForm.id = '' //将这个id置空，这个id是数据库中自增的id主键
		 
		  this.$axios({
		     method:'GET',
		     url:this.dbURL+'/common-borrow/orderBorrow',
		     headers:{"Authorization":localStorage.getItem("token")},
		     // params:{
		     //   archid:this.commentForm.id,
		     //   revisecomments:this.commentForm.reviseComments
		     // },
		 	params:this.orderForm,
		    }).then(res=>{
		 
		         console.log(res)
				 console.log(res.data.data)
				 var pd = res.data.data
				 var pd2 = "havedone"
				 
				 if(pd === pd2 )
				 {
					 Element.Message.warning("未预约成功！",{duration : 3*1000});
				 }
				 
		 		  Element.Message.success("成功预约！",{duration : 3*1000});
		 		  this.reload();
		         
		   })
		  
		   this.orderVisible = false
	 },
     archOrder(index,editPage){
       
       this.$confirm('是否确定预约 《' + editPage.title + '》 档案记录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success',
          center: true
        }).then(() => {
            //若确定预约，则填写借阅表操作，然后直接进入排队中，若无排队则自己为排队中 的 第二个，
			  this.orderVisible = true
			  this.orderForm = Object.assign({},editPage) 
			  
          //   this.$axios({
          //   method:'GET',
          //   url:this.dbURL+'/common-borrow/orderBorrow?arch_id='+editPage.id,
          //   headers:{"Authorization":localStorage.getItem("token")},
          //   // params:editPage.id,
          //  }).then(res=>{
               
          //      Element.Message.success("预约申请提交成功！",{duration : 2*1000});
          //      this.reload();
          // })


        }).catch(() => {
          //取消
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
	   

     },
     //借阅操作
     borrow(index,editPage){
		 
        this.checkVisible = true
        this.borrowForm = Object.assign({},editPage)   //将表格中数据填充到新的表单中 editForm 中
         
     },
     //下载文件
     downloadFile(id,editPage,index){
          
          if(editPage.fileType == "mp4")
          {
            let a = document.createElement('a')
            a.href="http://123.56.127.215/"+editPage.groupName+"/"+editPage.remoteFilePath;
            a.click(); 
            
          }
          else {
        
          this.$axios({
            method:'GET',
            url:this.dbURL+'/document/download?arch_id='+editPage.id,
            headers:{"Authorization":localStorage.getItem("token")},
            responseType: 'blob'
          }).then(res=>{
                console.log("excute  downloadFile ...")
               
                console.log(res.data)
                let a = document.createElement('a');
                let blob = new Blob([res.data],{
                   type:'application/octet-stream'
                }); 
                let objectUrl = URL.createObjectURL(blob);
                a.setAttribute("href",objectUrl);
                a.setAttribute("download", editPage.oldFilename);
                a.click()

          })
          }
      

     },
      //预览文件
      previewFile(index,editPage){
          

          if(editPage.fileType == "mp4")
          {
            let a = document.createElement('a')
            a.href="http://123.56.127.215/"+editPage.groupName+"/"+editPage.remoteFilePath;
            a.click();
          }
          else {
      
          this.$axios({
            method:'GET',
            url:this.dbURL+'/document/previewPdfFile?arch_id='+editPage.id,
            headers:{"Authorization":localStorage.getItem("token")},
            //responseType: 'arraybuffer'
            responseType: 'blob'
          }).then(res=>{
                console.log("excute  previewFile ...")
                console.log(res)

                let a = document.createElement('a');
                let blob = new Blob([res.data],{
                   //type:'application/pdf'   //也是必不可少的
                   type:res.data.type
                }); 
                let objectUrl = window.URL.createObjectURL(blob);
                window.open(objectUrl)
                
          })

        }
          
      },

       //打开页面就得到数据 //这个数据应该重新包装一下，只返回一些相关的数据即可，当然只能返回 没有密级的数据
       page(currentPage){
           
          //置入当前页数提交页数
          //this.$store.commit("SET_COUNTCURRENTPAGE",currentPage);
          
          const _this = this
          this.$axios.get(this.dbURL+'/common-users/getArchData?currentpage='+currentPage,).then(res=>{
              
			  console.log("获取check arch")
              console.log(res)
              
              if(res.data.code === 401)
              {
               Element.Message.warning("没有获取数据的权限！",{duration : 3*1000});
              }
            
              _this.tableData = res.data.data.records
             
              _this.total = res.data.data.total
              _this.pageSize = res.data.data.size


              //处理时间,提取年份即可
              console.log(_this.tableData[0].establishYear[0])

              for(let i in _this.tableData)
              {   
                 _this.tableData[i].establishYear = _this.tableData[i].establishYear[0]
              }
             

          })
       },

      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },

      clearFilter() {
        this.$refs.multipleTable.clearFilter();
      },
      
      formatter(row, column) {
        //alert(row.createdUsername)
        return row.createdUsername;
      },
      filterTag(value, row) {
        return row.departName === value;
      },
	  filterState(value, row) {
	          return row.state === value;
	   },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }    

    },
   created(){
            this.page(1)
            this.getBorrowData(1)
    },
   components:{
     
     }
}
</script>

<style>
	
	
   .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    /* color: #99a9bf; */
    color:rgb(102, 119, 165);
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  
 .mpage{
      margin: 0 auto;
      text-align: center;
  }

.el-textarea__inner
{
	height: 200px;
	
}

.have_borrow_div{
	margin-top: 3%;
	height:300px;
	width: 100%;
	/* background-color:#82AAFF; */
}

.mpageTwo{
	margin: 0 auto;
	text-align: center;
}

	


</style>