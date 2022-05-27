import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const key = process.env.KEY

const trackingrequest = async (req : NextApiRequest, res : NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(400).json({error: "failed"})
    }


    const trackingnumber = req.body.trackingnumber

    try {

    const options : AxiosRequestConfig = {
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