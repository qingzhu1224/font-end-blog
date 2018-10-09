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
