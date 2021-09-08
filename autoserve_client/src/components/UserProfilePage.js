import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const UserProfilePage = ({currentUser}) => {
    return(
        <main>
            <Card style={{ height: "100rem"}}>
                <Card.Header as="h2">{currentUser.full_name}'s Profile</Card.Header>
                <Card.Body style={{ textAlign: "start"}}>
                    <Card.Title style={{ display: "inline"}}>First Name: </Card.Title>
                    <Card.Text as="span">{currentUser.first_name}</Card.Text><br />
                    <Card.Title style={{ display: "inline"}}>Last Name: </Card.Title>
                    <Card.Text as="span">{currentUser.last_name}</Card.Text><br />
                    <Card.Title style={{ display: "inline"}}>Email: </Card.Title>
                    <Card.Text as="span">{currentUser.email}</Card.Text><br />
                    <Card.Title style={{ display: "inline"}}>Phone: </Card.Title>
                    <Card.Text as="span">{currentUser.phone}</Card.Text><br />
                   
                    <Button className="mt-2"  variant="primary">Edit Profile</Button>
                    <Button className=" mt-2 ms-2" variant="warning">Update Password</Button>
                </Card.Body>
           </Card>

        </main>
    )
}