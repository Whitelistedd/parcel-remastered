import axios, { AxiosPromise } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const key = process.env.ENV_LOCAL_CustomKey

interface options {
    method: string, 
    url: string,
    headers: {
        "Authorization": string, "Content-Type" : string
    }, 
    data: {
        trackingNumber: string
    }
}

const trackingrequest = async (req : NextApiRequest, res : NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(400).json({error: "failed"})
    }


    const trackingnumber = req.body.trackingnumber

    try {

    const options : options = {
        method: 'post',
        url: 'https://api.ship24.com/public/v1/trackers/track',
        headers: { 
          'Authorization': `Bearer ${key}`, 
          'Content-Type': 'application/json'
        },
        data : {
            trackingNumber: `${trackingnumber}`
        }
    };

    const response = await axios(options)

    res.status(200).json({data: response.data.data.trackings})

    } catch(err) {
        res.status(400).json({error: err})
    }
}

export default trackingrequest