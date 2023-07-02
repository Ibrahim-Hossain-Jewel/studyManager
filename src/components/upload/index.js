import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
class Upload extends React.Component{
    constructor(){
        super();
        this.state = {
            dialogOn: false,
            dialogOff: true,
        }
    }
    classRoomHandler(e){
        console.log("classroom handler");
        this.setState({dialogOn: true});
    }
    dialogOffHandler(e){
        this.setState({dialogOff: false});
        return this.state.dialogOff;
    }
    createHandler(e){
        console.log("create handler");
    }
    classNameHandler(e){
        console.log("class name handler", e.target.value);
    }
    subjectCodeHandler(e){
        console.log("Subject code handler");
    }
    subjectNameHandler(e){
        console.log("subjectNameHandler");
    }
    render(){
        return(
        <div>
            <Button
                label="Create Classroom"
                icon="pi pi-check"
                iconPos="left"
                onClick={this.classRoomHandler}
              />
            <Dialog
            header="Classroom Info"
            visible={this.state.dialogOff}
            onHide={this.state.dialogOn}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
          >
            <div className="grid">
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">
                    Name
                  </span>
                  <InputText
                    placeholder="Enter Subject Name"
                    onChange={this.subjectNameHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Code</span>
                  <InputNumber
                    placeholder="Enter Subject Code"
                    onChange={this.subjectCodeHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">Class</span>
                  <InputText
                    placeholder="Whose Classes video you made follow study level"
                    onChange={this.classNameHandler}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <Button
                    label="Create"
                    icon="pi pi-check"
                    iconPos="right"
                    onClick={this.createHandler}
                  />
                </div>
              </div>
            </div>
          </Dialog>
        </div>
        )
    }

}
export default Upload;