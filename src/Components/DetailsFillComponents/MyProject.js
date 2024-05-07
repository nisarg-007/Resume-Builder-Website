import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '../InputComponents/TextField'
import { updateProject ,addArrayElement,removeArrayElement } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'

// this component renders the key skills page inside the details filling page.

function MyProject(props) {
  const project = useSelector(state => state.dataStore.myproject) // this state stores the skills of dataStoreSlice.
    const dispatch = useDispatch();

    function AddProject(){
      //this function is used to push a blank object {skillName:"",} in the skills element of dataStoreSlice,
      //when the user clicks on the Add-Skill button to add more related details//
      dispatch(addArrayElement({
        key:'myproject',
        element: {title:"",Description:"",Start:"",End:""}
        })  
      )   
    }
    function RemoveProject(){
      //this function deletes the latest saved details in the skills element, when the user clicks on the remove button.
      dispatch(removeArrayElement({key:"myproject" }))
    }
    
  return (
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>My Project</h1>
        <hr/>
    
        {project.map((item,index)=>{
            return(
                <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
                    <TextField  type="text" value={item.title} placeholder="Enter Project title and description"
                      onChange={(value)=>{
                        // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and the user given input will be send as value  .
                       
                        dispatch(updateProject({
                          //this function updates the targeted key i.e skillName of skills element of dataStore in dataStoreSlice.js //

                          key: 'myproject',
                          value:value,
                          index:index,
                        }))
                      }}
                    />
                    
                </div>
            )
        })}
        <div className='row mt-3 '>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2'
                      onClick={AddProject}>
                    Add-Project
            </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2'
                      onClick={RemoveProject}>
                  Remove 

              </button>
          </div>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/keyskills' nextPagePath='/myresume' isFormValid={props.isFormValid}/>
      
    </div>
  )
}

export default MyProject
