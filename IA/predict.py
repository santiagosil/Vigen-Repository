from cProfile import label
from ctypes import Union
from unittest import result
from tensorflow import keras
import numpy as np
import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
from keras.models import load_model
from typing import Union

app = FastAPI()

class Item(BaseModel):
    genero: Union[int,None] = None
    orientacionSexual: Union[int,None] =  None
    edad: Union[int,None] = None
    municipio: Union[int,None] =  None
    sector: Union[int,None] = None
    nivelEducativo: Union[int,None] =  None
    estadoCivil: Union[int,None] = None
    etnia: Union[int,None] =  None
    ingresos: Union[int,None] = None
    ocupacion: Union[int,None] =  None
    p1: Union[int,None] = None
    p2: Union[int,None] =  None
    p3: Union[int,None] = None
    p4: Union[int,None] =  None
    p5: Union[int,None] = None
    p6: Union[int,None] =  None
    p7: Union[int,None] = None

@app.post("/")
def Prediccion(resp:Item):
    vector = []
    for x in resp:
        vector.append(x[1])
    vector.pop()
    model = load_model('model/myModel.h5')
    model.load_weights('model/myWeights.h5')
    label =['Ninguna','Violencia Infantil','Violencia intrafamiliar',
						'Violencia Adulto Mayor','Violencia de Género']
    prediccion=model.predict(np.array([vector]))
    predict=np.argmax(prediccion) 
    resp.p7=int(predict)
    return {'Label':label[predict], 'Responce':resp}