import NotificationCard from "./NotificationCard";

function NotificationList() {

    const notifications=[

        {
            ID:1,
            Type:"Result",
            Message:"Mid Sem",
            Timestamp:"10:30 AM"
        },

        {
            ID:2,
            Type:"Placement",
            Message:"Google Hiring",
            Timestamp:"11:00 AM"
        }

    ];

    return (

        <div>

            {

                notifications.map((item)=>(

                    <NotificationCard

                        key={item.ID}

                        notification={item}

                    />

                ))

            }

        </div>

    );

}

export default NotificationList;