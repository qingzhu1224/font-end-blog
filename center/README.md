###文字居中###

- table

        .container{
            display: table;
        }
        .content{
            display: table-ceil;
            text-align: center;
            vertical-align:middle;
        }


###无宽高的块居中###

- flex

        .container{
            display: flex;
            justify-content: center;
            align-items: center;
        }

- flex + margin

        .container{
            display: flex;
        }

        .content{
            margin: anto;
        }

- grid 

        .container{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }

        .content{
            grid-row-start: 2;
            grid-column-start: 2;
        }

###已知宽高###

- position+margin


        .container{
            height: 100%;
            position: relative;
        }

        .content{
            width: 300px;
            height: 300px;
            border: 1px solid red;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -150px;
            margin-top: -150px;
        }


- position+transform

        .container{
            height: 100%;
            position: relative;
        }

        .content{
            width: 300px;
            height: 300px;
            border: 1px solid red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }