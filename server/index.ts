import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'url'
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;
app.use(cors());
console.log(__dirname);

app.use(express.static("./public"));
app.use('/model',express.static("./model"));

// 切换模型 顺序切换
app.get('/switch', (req, res) => {
    const id = req.query.id;
    const newId = (Number(id) + 1) % 7;

    const data = [
        { id: 0, "message": "Hello 啊", },

        { id: 1, "message": "Hello 啊", },

        { id: 2, "message": "Hello 啊", },

        { id: 3, "message": "Hello 啊", },

        { id: 4, "message": "Hello 啊", },

        { id: 5, "message": "Hello 啊", },

        { id: 6, "message": "Hello 啊", },

        { id: 7, "message": "Hello 啊", },
    ]

    res.send(data[newId])
})

// 获取模型
app.get('/get', (req, res) => {
    console.log(__dirname);
    const modelId = req.query.id?.splice('-')?.[0];
    const modelTexturesId = req.query.id?.splice('-')?.[1];
    console.log(modelId, modelTexturesId);

    const data = fs.readFileSync('./public/model/XueXiaoBan/xxb/index.json',{encoding:'utf-8'});

    res.send({
        data:JSON.parse(data),
    })

})

// rand_textures/?id=4-133 随机纹理
app.get('/rand_textures', (req, res) => {
    const modelId = req.query.id?.splice('-')?.[0];
    const modelTexturesId = req.query.id?.splice('-')?.[1];
    console.log(modelId, modelTexturesId);
    
})

app.listen(port, () => console.log(`http://localhost:${port}`,Date.now()));