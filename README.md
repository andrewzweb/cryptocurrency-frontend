# Currency-frontend

## Build using docker 

When you in root dir. Build docker image 

```
docker build -t currency-frontend .
```

End start this image 

```
docker run -p 3000:300 -d  -t currency-frontend
```

In browser open http://localhost:3000 there will be app

