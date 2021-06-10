<template>
   <div id="testapp">
        
		<div >
		        <el-dialog  title="审核意见"  :visible.sync="checkVisible"    :close-on-click-modal="false" width="76%">
		         
		         <el-form  :rules="CheckRules"  :inline="true"  :model="commentForm"   ref="commentForm"  label-width="80px">
		         
		       <!-- <el-form-item label="材料名称" prop="title">
		           <font>{{commentForm.title}}</font>
			            </el-form-item> -->
		        
		
		        <el-form-item   prop="reviseComments" >
		           <mavon-editor v-model="commentForm.reviseComments"></mavon-editor>
			            </el-form-item>
		       
		       </el-form>
		
		      <span slot="footer" class="dialog-footer">
		       
		         <el-button @click="checkVisible = false;reseteditForm('commentForm')">取 消</el-button>
		         <el-button type="primary" icon="el-icon-circle-check"  @click="submitComment">提交</el-button>
		      </span>  
		
		</el-dialog>  
		
		  </div>
		  
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
		         </el-form>
		        </template>
		      </el-table-column>
		   
		      <el-table-column
		       prop="id"
		       label="编号"
		       width="75"
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
		       align="center"
		       show-overflow-tooltip
		       >
		       <template slot-scope="scope">
		          <div > 
		               <el-button  v-if="scope.row.enclosure" @click="previewFile(scope.$index,scope.row)" type="text" size="mini">查看附件</el-button>
		               <el-button  v-if="scope.row.enclosure"  @click="downloadEnclosure(scope.row.id,scope.row)" type="text" size="mini">下载</el-button>
		               <el-button  @click="accessCheck(scope.$index,scope.row)" type="text" size="mini">借阅</el-button>
		               <el-button  @click="refuseCheck(scope.$index,scope.row)" type="text" size="mini">预约</el-button>
		          </div>
		   
		       </template>
		     </el-table-column>
		   
		   </el-table>
		    
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		 
		 
		   
		  
   </div>
</template>

<script>

//import Hello from '../components/hello.vue' 

export default{
   data(){ 
       return {

                  
         };
     },
   methods: {
              
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
