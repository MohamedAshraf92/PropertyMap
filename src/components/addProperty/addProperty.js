import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import faker from 'faker'
import { v4 as uuid } from 'uuid'
// import Modal from 'react-modal'

import './addProperty.css'
import axios from '../../axios'

const AddProperty = (props) => {
    const { register, handleSubmit } = useForm()
    const [arrayPics, setArrayPics] = useState([])
    // const [isModalOpen, setIsModalOpen] = useState(false)

    // const history = useHistory()

    const onSubmit = (data) => {
        if (data.photos.length > 5) {
            window.alert('Maximum photos nubmer to upload is 5')
        } else {
            data.photos = arrayPics
            const date = faker.date.between('2021-01-01', '2021-01-31')
            data.createdAt = String(date)
            data.id = uuid()
            setArrayPics([])
            console.log(data)
            axios.post('/properties.json', data).then (res => {
                console.log(res)
                // setIsModalOpen(true)
            }).catch(err => window.alert('FAIL TO ADD PROPERTY'))
        }
    }

    const onUploadImage = (e) => {
        e.preventDefault()
        const files = e.target.files
        let tempPics = []
        Object.values(files).forEach((file) => {
            const render = new FileReader()
            render.readAsDataURL(file)
            render.onload = (e) => {
                tempPics.push(e.target.result)
            }
        })
        setArrayPics(tempPics)
    }

    // const closeModal = () => {
    //     setIsModalOpen(false)
    //     history.replace('/home')
    // }

    return (
        <div className="add-new">
            <h2>Add new property</h2>
            <p>Fill the following form to add yor propert..</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <label>Property name</label>
                    <input type="text" name="name" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>City</label>
                    <input type="text" name="city" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Address</label>
                    <input type="text" name="address" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <input type="text" name="description" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Bedroom</label>
                    <input type="number" name="bedroom" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Bath</label>
                    <input type="number" name="bath" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Carpet area</label>
                        <select name="unit" ref={register}>
                        <option value="msq" defaultChecked>Meter Sq.</option>
                        <option value="fsq">Feet Sq.</option>
                        <option value="ysq">Yard Sq.</option>
                    </select>
                    <input type="number" name="area" ref={register}/>
                </div>
                <div className="form-row">
                    <label>Price</label>
                    <input type="number" name="price" ref={register({ required: true })}/>
                </div>
                <div className="form-row">
                    <label>Upload photos</label>
                    <input type="file" multiple accept=".png, .jpg, .jpeg" name="photos" ref={register({ required: true })} onChange={(e) => onUploadImage(e)}/>
                </div>
                <input type="submit" className="submit" />
            </form>
            {/*<Modal className="modal" isOpen={isModalOpen} onRequestClose={setIsModalOpen(false)}>
                <div>
                    <h1>Property added successfully</h1>
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>*/}
        </div>
    )
}

export default AddProperty