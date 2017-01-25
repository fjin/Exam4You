var questions_set =
    [
        {
            "id" : 0,
            "question": "In reviewing the Auto Scaling events for your application you notice that your application is scaling up and down multiple times in the same hour. What design choice could you make to optimize for cost while preserving elasticity? Choose 2 answers",
            "answers": [
                "Modify the Auto Scaling group cool-down timers.",
                "Modify the Auto Scaling group termination policy to terminate the newest instance first.",
                "Modify the Amazon CIoudWatch alarm period that triggers your Auto Scaling scale down policy.",
                "Modify the Auto Scaling group termination policy to terminate the oldest instance first.",
                "Modify the Auto Scaling policy to use scheduled scaling actions"
            ],
            "results": [
                0,
                2
            ]
        },
        {
            "id" : 1,
            "question": "A customer's nightly EMR job processes a single 2-TB data file stored on Amazon Simple Storage Service (53). The Amazon Elastic Map Reduce (EMR) job runs on two On-Demand core nodes and three On-Demand task nodes. Which of the following may help reduce the EMR job completion time? Choose 2 answers",
            "answers": [
                "Use three Spot Instances rather than three On-Demand instances for the task nodes.",
                "Change the input split size in the MapReduce job configuration.",
                "Use a bootstrap action to present the S3 bucket as a local filesystem.",
                "Launch the core nodes and task nodes within an Amazon Virtual Cloud.",
                "Adjust the number of simultaneous mapper tasks.",
                "Enable termination protection for the job flow."
            ],
            "results": [
                1,
                4
            ]
        }
    ];