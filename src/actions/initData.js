

export const initData = {
    boards : [
        {
            id : 'board-1',
            columnOrder: ['column-1','column-2','column-3'],
            columns : [
                {
                id: 'column-1',
                boardId: 'board-1',
                title: 'Resources',
                cardOrder : ['card-1','card-2','card-3','card-4' ],
                cards : [
                    {
                        id: 'card-1',
                        boardId: 'board-1',
                        columnId : 'column-1',
                        title : 'Financial & Growth Data',
                        image : "https://www.datapine.com/blog/wp-content/uploads/2023/07/fixed-operating-expenses.png"
                    },
                    {
                        id: 'card-2',
                        boardId: 'board-1',
                        columnId : 'column-1',
                        title : '2017 Goals And KPIs',
                        image : null
                    },
                    {
                        id: 'card-3',
                        boardId: 'board-1',
                        columnId : 'column-1',
                        title : 'Brand Guide',
                        image : null
                    },
                    {
                        id: 'card-4',
                        boardId: 'board-1',
                        columnId :'column-1',
                        title : 'Employee Manual',
                        image : null
                    },
                    
                ]
                },
                {
                id: 'column-2',
                boardId: 'board-1',
                title: 'To Do',
                cardOrder : ['card-5','card-6','card-7','card-8' ],
                cards : [
                    {
                        id: 'card-5',
                        boardId: 'board-1',
                        columnId : 'column-2',
                        title : 'Build A Better Burrito: 7 Layers To Success',
                        image : null
                    },
                    {
                        id: 'card-6',
                        boardId: 'board-1',
                        columnId : 'column-2',
                        title : 'Nacho Ordinary Birthday - Event Space Rentals',
                        image : null
                    },
                    {
                        id: 'card-7',
                        boardId: 'board-1',
                        columnId : 'column-2',
                        title : 'Taco Drone Delivery Service',
                        image : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTExYTExMWFhYQFxYWGBkTFhYYGBgWFhYXGBkWFhYZHikhGRsmHhYXIjIiJiosLy8vGCA1OjUuOSkuLywBCgoKDg0OHBAQHC4mICYuLi4wLjcsLi4uLi8uMC4uLy4vLi4uLi4uLjAuLDEuLi4uLCwuLi4wLi4uLi4xLiw5MP/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAYHBQj/xABFEAABAwICBQYJCgYBBQAAAAABAAIDBBESIQUGMUGRBxNRYXHSFyJSU1SBk7HRFBUWMkJDoaLB8CNEYoKSwuEzcnODlP/EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAxEQACAgAEAggFBAMAAAAAAAAAAQIRAwQSMSFRBRMVQVKRobFhcYHS4RYyQlOC8PH/2gAMAwEAAhEDEQA/AO4EqKqVUBAAFVEQBERAFQqqICICkiIAiIgCiShQBAAFJEQBERAFQqqICAUgFVEAREQBUJQlRQBSAQBVQBERAERUKAipAIAqoAiIgCIiAIiIAiIgCjdCUAQEkREAREQBFS6qgKWVURAEREAVLqzPO1jXPe4NawFznOIAa0C5JJ2ALkGs/LaGPLKKEPAy52fEGu62xNs63WSD1IDsyLg+ieXOoa4fKaaJ7CczAXRuA6QHucHHquO1di1d09BWwtnp342OyO5zXDax4+y4dHWDsIKA9ZERAEREBQhAFVEAREQBEUEBNFQKqAIiIAiIgKIqogCIonZkgJKJKx3l+4cSPcAVawzHY5g7Wu/4U0RZmgKS8x9PUn71g7GfG6sv0fUHbPwuPcppcyNT5HsqEkgaLkgDrNl4o0RP588X/Fa7pzTMbH81LUBz48iLHxSQDYm2ZsQlR5otCOJPhCDb+Cv2N+uqErUdBVRqYyIajxY8iACC25Ns7C97FekNETbpz/k/4ppXMiWuLqUWnyfBnuBSXjsoqkbJx6xf3hZDIqgfeRntYf0ISlzIt8j0EWEznd5aewOHvBV5hfvH4g+6yiibL60DXrlMgoH8yxhnnABcwOwsjBsRzj7GziDfCAT02uCt6mfZpNr2BPAL5N0Y/wCUTuknOJ0mKZ1/tPLrm/Vd3CyvhYbxJqEd2VxMRYcHN7I2PXHlSqK6ndTOjjia9zS7m3OcXNbngN/s3seuy0G63f5PH5uP2bPgrkFFG4hvNR57f4bNm/cvS7Jl415fk83tReH1/Bol1s2o+u0+jHyOia2RszQHRyEhuJp8V4tvAxDsPUFskVBESTzUdh4o/hs3bTs/dlZ0hTRCzRGy5zNo2bOChdFtutXp+SO1V4fX8G5asctUUsgjrIRAHkASsfjjBPnAQCxv9We3OwzXWr9G9fJ2n6FgaHtAacWEgZA3BOzpyXf+SOtfLoumc8klgkjB6WxSPYzts1oHqWDMYEsGeiR6OBjLFhrRuQKkrb8W798VjvMu7CO259wXKjpZmIvPLKg7Hxj+x36lWX0dSfvx6mge4KdPxIt8j1kXhP0VMds54u+KxdI85TRulkqcLRl41zmcgBtzPSjS5kx1SdKLs2JsgJIBBttsbkdqmAucaO0/AJGhk7WFxwglpObsgDlvNltjtEznbOeLvilR5omcMWH74NfNNe9HuovFZo2cbJz68R96vNp6kffNPawfoEpcyup8j1EWCBONroz2Ndf3qbC/f+Bt+BCiibMq6qrbAd/77VcUEhERAFQqqICllVEQBERARc4AXOQHSuE68VLHV87hIwtJFjiBBtGzYQV2nTWj21EEsDi4NqI3xuLSAQHtLSRffmua+Aul9KqOEXcVZR1I2ZLOPKzc0rtVvXenyfIyuSfSULGz45o23MdsT2i+T72uV5HKxylOY75HQy2IH8aaIgkXFxHE8bDY3LhsuAM72y/APR+k1HCLuKo5CKX0qo4Rd1IxpUc81jvHxXiNVde1HFH6XqCbmonJO0maUnjiUfnSfz83tpO8u2+Aml9KqOEXdTwE0vpVRwi7qsZziXzpP5+b20neT5zqPSJvbSd5bxrtyamikaGSOdFIPFc8Z3H1mOIFr7x1HqK1r6Ony/3wVHiRTpm7C6OzGLBTgrT+KMB2lJhsnm6f+rJ3li08zmODmmxH7t2L2vo4fL/fBPo4fL/fBFjRTtMu+iM01Tj6oxPn6boj/wAT8Vci1knbewjzyvhdf1eMr/0cPl/vgn0cPl/vgtPaWL42Zv07if1rzRFmtdQAABFYf0v7ytO1gmcbnm7n+l3eV8auHyvf8FcOr1vtfj/wi6QxV/Nj9PT/AK15o8qurHSWxnZsAFgrMdfM0WbNK0DYGyPaB2AGwXrnV0+X7/gn0cPl/vgs88dSdyds0R6HzMVUYUvmjy/nOo9Im9rJ3k+c6j0ib2sneXqfRw+X++CuUuqj5HtjYbueQ1oF8ydm5R1kSeyc13x9UeP851Hn5vayd5PnOo8/N7WTvLtMPIVT4Rjqp8VhiwiPDitnhu29rq54CaX0qo4Rd1XPOOcan6+1dDKHOmkmhuMcUj3PBbvMeI+I/oIsDbNde1709TVGjg+KdhErontAc0Osc82E3B6Qdi8k8hVL6VUcIu6o+Aek9KqOEXdUNWqOuBi9VixxErp2aXo2oZzsfjtye37Q8oL6Hp6yOS5jkY8DI4HB1j12K5b4CKT0qo4Rd1bTqHqDDosymKWSQzhgPOYAAGYrWDQM/GO3qVYQ0mrPZ95txbjVX33v9EbiiKJKuYASgCAKSAIiIAiIgKBVREAREQBFS6qgCIiAIisOqBuzRKyG6L6oSsQ1Z6ApsqAduSmmRqRZ0ro2OojMUrcTXcQdzmncR0rmOmeTeoYSactlbuBIa8dRBs09oI7AuuBVVJQUtzdlc9jZb9j4cnt+PpRwKs1XrIo3yyQOYyNrnvcSLNa0XJNjuAVaXVWskY2SOBzmSNa9rgRZzXAFpFzfMELp/KtVc1omsd0xYPaubH/utj0XT83DFH5uNjP8WgfoqdUjf27j+GPr9xxL6G1/oz+Lfin0Nr/Rn8W/Fd3ROqQ7dxvBH1+44SNTq8fyz+LfiqfQ2v8ARn8W/Fd3ROqQ7dx/BH1+44R9Da/0Z/FvxWJQav1M/OCGIv5iR0MliPElZbEw3tmLjZkvoJaTqO4MrtLQ+TUwzf8A0QNdf8pTqkO3cbwR9fuNIotQq6Q2dE2MeU9zR+UEu/BdD1T1Oio/HJ5yUi2IiwaDtDG7u3aerYtpJUSrRw0uJlzPSmPjx0OkuS7/AJ8WyaKgVVc84IiIAiIgKFUAUkQBERAERRJQEkULogJoiIAokoSgCAAKSKL3WF0BJQxjpHFYckhO1RV9Bzcy7PJc23BWLoSqKxRuxZTQBFIL1PLbI7FkYx0jisFFVxsspUa1ytgPomwn+aqaWG3Tima635VupK0DX045tGQk5Gvjlt1QMe/hmt9VGqOidhTUGEZ9RseAP6qagkIiIAtI0OBHputb6RS0s3bzZfFf3LdnOstArXYdOwybOfoZYtu3mpmycbOUpWQ3RvcslljGd3YrZJO1VV1E5uVl5lQd+ayWuvmFgKoeRsJRxCm0egixoZtx9SvEqjVHROyt1JRAUlBIREQBEUSUAJQIApIAiIgCiSvF1oqJGMYY5MGZxHHGzxbW2vY7eW7AvUpXXY0ne1pzIJ2dIyPqQF4BSREAWPVnYshWallxfoUrcrLYxERF1ORFSCIgCIiAKJKqVFGDUNYml+ltGMvlE2smI/8AU1jTxK3yJ1mX6AfwWiG79OgboNHk/wB0tRb3Bb/G2wAXOWx0iQpxkTvcSf0H4AK8salBGJu5ps3ssDb1XWSqlwiIgLUwuD2LQdamluk9FS7i+qiPXzkAwji0roDXA8SOBstI5TI8DtHzN+70jTh3U2QPY4/iFKZVo2lFlMpwNuaoaYbir6kU0MxkWU2ADbmrbqYdKakNDLUIu4LOAUI4QFdVG7LxVBFS6qoLBERARJQBVsqoAiIgCIiA13W5jiyPCHXEgIwRMkN+jx8m5XzNhkew+1Sf9NlhYYW5WtbIfZ3di8HXR4bExxDTZzrYmvdY827NuAGx69ozsbr3qJmGNjfJa0b9wHTnxQGQiIgCi4oSqBAWX0/QofJndSywFVWUmV0IsR04G3NRfTdB4rJRRbGlGH8nd1KbKbpPBZF1VTqY0IxpKfoVsUzupZqKFJhxRourQx6Z0kfR4qOIH/vjfIbetb0tI5PnCSp0rMPtVpiv/wCCJjbfiV7+tOlH01NLOxgkdEAcJNhm4Ak9QBv6lWTpWw2oq33GbV10UOHnJGR847C3G4NxOO4X2leHrDrjBSTRwyBxMou5zbWjaXYQ52d7ZE5bgtL0rI/SYhfPGImRB1mscS6Qvw3OzxR4gsMzt6lkQaMhZsjbfpcMR6PrOz3Lw8103h4cnGC1Pn3fE04OSzGMtSqK4U3bb/x7vq0++mbPPr1StqY6ZrsZlIHORlpja5xs1pIOZ2XtsuPVsPy6LnOZ5xnOWxYMQx4enDtsudTUET8nRsIOX1c/Udy1bV1kkE0NUxoeccjQ258bxSw4nEZZONj1Jlem44t61XFezfsmaJdE5pRc4VJJrhxTr4b20k3vfck2zudM2zR0nM9pzP4ladyxOwaNkmAuaaWnlH9s8Y/VZepGs8taZuchEXMOaBYk/WxXa64+sMI/yV7lMp+c0XWN6IJH+zGP/Ve3GSkrWx50Jqa1I2UFVXnavVXO00Eo+9hif/lG0/qvRVixQoAqogLckoaseWa+QyCjP9YqC6RitzlKT2CvsqLDNWFElS1ZVOtj0WPBFwpLEo9/Qstc2qZ2i7QREUEhERAEREB4mssEj42821z7OzayQMywmzjfJ1jY4TcHeCvVpmYWNaSSWtAudpsNp615GtEgYxrzFE+xIvMQGtv0k7L/AKW3r1KFoEbMIAGEGwGEZi+Q3IDJVCVQlUAQFVUBAFR+woA54G0rGdUncFZJRdFBHJzZlxzg7clduvOKv0h2jcocS0ZWZCmqAKqoXCIvM0rpaKBrscsbHYHOa172tc6wNsLSbnNNiUm3SNc5KAHUs0o/mayrm7bylt/yLydPiodWyxSzF0ADJWxtyaW/ZY7LPNjiRvsFf5O54YtEQ07qqOGUxSfWkYHxvle9wJaSCCC/YehebR07KYEPrIZnPdcyNkaTbZhJLibjr6V5XS2LOOWfV3e1ruvfY1ZTAbzEdcHVN8dtml8+a7rV9yM9YdQ+VsmK7OYDPG24w++3ZbDa3Rax23Frvy+Lz0XtG/FV+XReei9o34r4yMJx/i/I+icG+ZYkme9zOZcwsa7+KSb+KRsYQCCR0ZbRnuOTTU7Y24GNDWi5sNlybn8SofLovPQ+0b8U+XReei9o34qZLEkq0vyfz48OPwvZcAoSV7mLpIVDSH0spifK5kbrWDTc4WudcEZF1r9B6l0bStMZKWWJ5BdJC9jiBYEuYWkgdFytAlfDK10fPwtxgtxOkjs2/wBo57tq2PVSoipoOam0hDM7ESHOmZk0gWYC5xJGRPrX1PQWJidU4zTpPhftx4/6jw+kMvWMpQi7knb7t+HDm7d1y4l7kyqMei6M9EDG+z8T/VbQFz7koroYqFlM6WMOilnja1z2hzm8+8tLWk3IIdkRtXQl7x57i4umqCIiEEHxg7VRsLRuVxRJSyKLRgahp2ncroCkptikRaAMgpIigkIiiSgK3VVABTQBERAa5rjUlsTWA5yO8p7SQ3c3C12I3LTboBOxpXuURvGw3vdrc888hnmvK1orXRRDA4tkc4YbNDrhpBcDiIAFuvqG1erSuuxpJJu1puRYnLaRu7EBdsqgKqIAiIgLRgb0Kj4W9HBXSopbIpFswN6FdY0DIKoCqgoIiISFz7WvUOWpqHTsmaBIG3a/FdpaALNIByyv6yugoqyipKmaMtmsTLy14bp1X0OUjkwn89Fxf3VQ8l9R5+L8/dXV0VeqibO2c3zXkjlHguqPPRfn7qeC6o89F+furq6J1aJ7azfNeSOUeC6o89F+fuqngvqPPxfn7q6wo3Tq0O2c3zXkjlQ5L5/PxcXd1V8F9R5+L83dXVAFJOqRHbOb5ryRyqHkvmuMU7ALi5biLgP6btGa6pZVRWjFR2M2azuNma613W3Ct/8AgREVjIRJVAFIhVQBERAERRJQFSVQBApIAiIgCIiA1vXJx5kDEyxObXBpc+1rYGucGuI3gg7bjMC/uUd+bZcWOFuWeWXXnxVKqkjlGGRjXjaMQBsekdB6wr7W2AA2DJASREQBFS6qgCIiAIiIAqEoSokoCQKqotCkgCIiAIiIChSyqiAIiIAiKJKAkiiFJAEREAREQFCqWUkQBERAERUKAqiiiA//2Q=="
                    },
                    {
                        id: 'card-8',
                        boardId: 'board-1',
                        columnId : 'column-2',
                        title : 'Superbowl Ad - "Super Salad Bowls"',
                        image : null
                    }

                ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Doing',
                    cardOrder : ['card-9','card-10','card-11', 'card-12'],
                    cards : [
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'The Taco Truck World Tour',
                            image : null
                        },
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Operation "Awesome Sauce" -A Recipe For Profit',
                            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qiCG-XGkyG14zD-HWI827kiRWAFn0pR-Iw&usqp=CAU"
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : '#NoFiller Instagram Campaign',
                            image : null
                        },
                        {
                            id: 'card-13',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Global Franchies Opportunities',
                            image : null
                        }
    
                    ]
                    },
                {
                    id: 'column-4',
                    boardId: 'board-1',
                    title: 'Done',
                    cardOrder : ['card-14','card-15','card-16', 'card-17','card-18'],
                    cards : [
                        {
                            id: 'card-14',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Focus Group:Corn vs. Flour Tortillas',
                            image : null
                        },
                        {
                            id: 'card-15',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'New Swag:Socks,Scarves & Salsa',
                            image : null
                        },
                        {
                            id: 'card-16',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Eco friendly Utensils and napkins',
                            image : null
                        },
                        {
                            id: 'card-17',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Update Yelp Listing',
                            image : null
                        },
                        {
                            id: 'card-18',
                            boardId: 'board-1',
                            columnId : 'column-3',
                            title : 'Grand opening Celebration',
                            image : "https://media.istockphoto.com/id/1137409760/vector/grand-opening-invitation-banner-with-levitating-gold-ribboons-and-frame-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=zKYpMqG-BNvXe3ZZ7KYurZ85eGG04CkQ_ewSm0xlQ_o="
                        }
    
                    ]
                    }
            ]
        }
    ]
}