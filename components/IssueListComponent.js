import React from 'react';
import IssueForm from './IssueForm';
import IssueNameComponent from './IssueNameComponent';

class IssueListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            issues:[
                {
                name:"Create React App",
                completed:false
                },
                {
                    name:"Demo of React App",
                    completed:false
                },
                {
                    name:"Attend meetings",
                    completed:true
                }],
                currentIssue:''
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.updateIssue = this.updateIssue.bind(this);
        this.addIssue = this.addIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
    }
    addIssue(event){
        event.preventDefault();
        let issues = this.state.issues;
        let currentIssue = this.state.currentIssue;
        issues.push({
            name:currentIssue,
            completed:false
        });
        this.setState({
            issues:issues,
            currentIssue:''
        });
    }
    editIssue(index,valueToUpdate){
        let issues = this.state.issues;
        let currentIssue = issues[index];
        currentIssue['name']=valueToUpdate;
        this.setState({
            issues
        })

    }
    deleteIssue(indexToBeDeleted){
        let issues = this.state.issues;
        issues.splice(indexToBeDeleted,1);
        this.setState({
            issues:issues
        })

    }
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue.target.value
        })
    }
    changeStatus(index){
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({
            issues:issues
        })

    }
    render(){
        return(
            <div className="container">
                <h1 className="display-4 mt-3 text-center">Issue Tracker App</h1>
                <IssueForm
                updateIssue={this.updateIssue}
                currentIssue={this.state.currentIssue}
                addIssue = {this.addIssue}/>
                <ul className="list-group list-group-flush">
                    {this.state.issues.map((issue,index)=>{
                            return<IssueNameComponent key={issue.name} 
                            issue={issue}
                            clickHandler={this.changeStatus}
                            deleteIssue={this.deleteIssue}
                            index = {index}
                            editIssue ={this.editIssue}/>;
                    })} 
                </ul>
            </div>
         
        );
    }
}
export default IssueListComponent;