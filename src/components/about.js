import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillValue: 'defaultSkill',
            levelValue: '',
            title: "About Me",
            contact: {name: "Franck Anaël", profile: 'images/profile.png', email: 'franelstar@gmail.com'},
            skills: [
                {id: 1, skill: 'Sofware engineering', level: 'Expert'},
                {id: 2, skill: 'Web development', level: 'Intermediate'},
                {id: 3, skill: 'Mobile development', level: 'Beginner'},
                {id: 4, skill: 'Data Science', level: 'Intermediate'},
                {id: 5, skill: 'Machine Learning', level: 'Beginner'}
            ]
         };
    }

    setSkill = (e) => {
        this.setState({ skillValue: e.target.value });
    }
    setLevel = (e) => {
        this.setState({ levelValue: e.target.value });
    }
    addSkill = (e) => {
        e.preventDefault(); // Empêcher que l'évenement se propage et que la page se recharge
        if (this.state.skillValue.trim() === '' || this.state.levelValue.trim() === '') {
            alert('Please fill in both skill and level fields.');
            return;
        }

        // Vérifier si la compétence existe déjà
        const existingSkill = this.state.skills.find(skill => skill.skill.toLowerCase() === this.state.skillValue.toLowerCase());
        if (existingSkill) {
            alert('This skill already exists.');
            return;
        }

        // Ajouter la nouvelle compétence
        const newSkill = {
            //id: this.state.skills.length + 1,
            id: [...this.state.skills].pop().id + 1,
            skill: this.state.skillValue,
            level: this.state.levelValue
        };
        this.setState(prevState => ({
            skills: [...prevState.skills, newSkill],
            skillValue: '',
            levelValue: ''
        }));
        this.skill.value = '';
        this.level.value = '';
    }

    onDelete = (skill) => (e) => {
        e.preventDefault();
        const updatedSkills = this.state.skills.filter(s => s.id !== skill.id);
        this.setState({ skills: updatedSkills });
    }
    
    render() {
        return (
            <div className="about">
                <div className='card m-3'>
                    <div className='center card-header text-center'>
                        <label>
                            <strong>{this.state.title}</strong>
                        </label>
                    </div>
                    <div className='row p-2'>
                        <div className='col col-auto'>
                            <img src={this.state.contact.profile} alt="Profile" className='img-fluid' width={150} />
                        </div>
                        <div className='col-md-8'>
                            <ul className='list-group'>
                                <li className='list-group-item'>{this.state.contact.name}</li>
                                <li className='list-group-item'>{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='card m-3'>
                    <div className='card-header'>
                        <strong>Skills</strong>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={this.addSkill}>
                            <div className='row mb-2'>
                                <div className='col col-md-4'>
                                    <input type="text" name='skill' value={this.state.skillValue} onChange={this.setSkill} className='form-control' placeholder='Skill' ref={skill => this.skill = skill} />
                                </div>
                                <div className='col col-md-4'>
                                    <input type="text" name='level' value={this.state.levelValue} onChange={this.setLevel} className='form-control' placeholder='Level' ref={level => this.level = level} />
                                </div>
                                <div className='col col-auto'>
                                <button type='submit' className='btn btn-primary m-2'>Add Skill</button>
                                </div>
                            </div>
                        </form>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Skill</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.skills.map((skill, index) => (
                                    <tr key={skill.id}>
                                        <td>{skill.id}</td>
                                        <td>{skill.skill}</td>
                                        <td>{skill.level}</td>
                                        <td><button className='btn btn-danger' onClick={this.onDelete(skill)}>-</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;