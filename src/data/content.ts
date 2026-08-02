export const profile = {
  name: 'Rajesh Kumar Dash',
  handle: '@Rajesh2015',
  role: 'Data Engineer & Data enthusiast',
  location: 'Bangalore, India',
  email: 'dashrajesh49@gmail.com',
  summary:
    "I build data pipelines and machine learning systems — from streaming Kafka topics into Delta Lake with Spark, to training models for churn prediction, sentiment analysis, and computer vision. Lately I've been spending more time on the ML/GenAI side while keeping one foot in the data engineering pipelines that feed it.",
  bio: [
    "I started out writing Java and Scala, building batch and streaming pipelines on Spark, Kafka, and Databricks — things like CDC into Delta tables, SCD Type 2 dimensions, and automated Databricks deployments.",
    'Over the last couple of years I moved further into data Engineering and ML : churn prediction, sentiment analysis, computer vision, and more recently experimenting with LLM agents for synthetic data generation.',
    "I write about what I build on my blog and Medium, and I'm always up for a new project or a good technical conversation.",
  ],
}

export const links = {
  github: 'https://github.com/Rajesh2015',
  linkedin: 'https://www.linkedin.com/in/rajesh-kumar-d-973b45119',
  blog: 'https://www.rajeshblogs.in/',
  medium: 'https://rajeshblogs.medium.com/',
  email: 'mailto:dashrajesh49@gmail.com',
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'Scala', 'Java', 'SQL'],
  },
  {
    label: 'Data Engineering',
    items: ['Apache Spark', 'Kafka', 'Databricks', 'Delta Lake', 'Apache Hudi', 'Hive', 'Cassandra'],
  },
  {
    label: 'Machine Learning',
    items: ['scikit-learn', 'Neural Networks', 'NLP', 'Computer Vision', 'LLM Agents'],
  },
  {
    label: 'Platform & Tools',
    items: ['Docker', 'AWS Lambda', 'Elastic / Kibana', 'Jenkins', 'Git'],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  repo: string
  href: string
}

export const projects: Project[] = [
  {
    title: 'Food-101 Detection Capstone',
    description:
      'Computer vision capstone project classifying food images across 101 categories — data preprocessing, model training, and evaluation.',
    tags: ['Computer Vision', 'Deep Learning', 'Python'],
    repo: 'Food-101-Detection-Capstone-Project',
    href: 'https://github.com/Rajesh2015/Food-101-Detection-Capstone-Project',
  },
  {
    title: 'Stock Market News Sentiment Analysis',
    description:
      'NLP pipeline that scores sentiment from market news and generates automatic summaries to support trading signals.',
    tags: ['NLP', 'Sentiment Analysis', 'Python'],
    repo: 'Stock-Market-News-Sentiment-Analysis-and-Summarization',
    href: 'https://github.com/Rajesh2015/Stock-Market-News-Sentiment-Analysis-and-Summarization',
  },
  {
    title: 'Credit Card User Churn Prediction',
    description:
      'Classification models to predict which credit card customers are likely to churn, with feature engineering and model comparison.',
    tags: ['Machine Learning', 'Classification'],
    repo: 'credit-card-user-churn-prediction',
    href: 'https://github.com/Rajesh2015/credit-card-user-churn-prediction',
  },
  {
    title: 'Synthetic Data Generator Agent',
    description:
      'An LLM-driven agent that generates synthetic datasets on demand — useful for testing pipelines without real user data.',
    tags: ['Python', 'LLM Agents', 'GenAI'],
    repo: 'synthetic-data-generator-agent',
    href: 'https://github.com/Rajesh2015/synthetic-data-generator-agent',
  },
  {
    title: 'Kafka to Delta Lake Streaming',
    description:
      'CDC implementation streaming a Kafka topic straight into a Delta table on Spark, keeping downstream tables in sync in near real time.',
    tags: ['Spark', 'Kafka', 'Delta Lake', 'Scala'],
    repo: 'spark-steraming-with-delltalake',
    href: 'https://github.com/Rajesh2015/spark-steraming-with-delltalake',
  },
  {
    title: 'Automated Databricks Deploy',
    description:
      'Shell scripts that automate building and deploying Dockerized Spark jobs to Databricks container services.',
    tags: ['Databricks', 'DevOps', 'Shell'],
    repo: 'automated-databricks-deploy',
    href: 'https://github.com/Rajesh2015/automated-databricks-deploy',
  },
]

export type BlogPost = {
  title: string
  href: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Merging small parquet files in AWS Lambda',
    href: 'https://rajeshblogs.medium.com/merging-small-parquet-files-in-aws-lambda-497bc821e685',
  },
  {
    title: 'Dockerize Spark Jobs with Databricks Container Services',
    href: 'https://rajeshblogs.medium.com/dockerize-spark-jobs-with-databricks-container-services-d39aa430a3e3',
  },
  {
    title: 'Implementation of CDC in Spark using Delta file',
    href: 'https://rajeshblogs.medium.com/streaming-kafka-topic-to-delta-table-in-scala-dbce86d1cdb2',
  },
  {
    title: 'Implement SCD Type 2 via Spark Data Frames',
    href: 'https://www.rajeshblogs.in/2021/05/implement-scd-type-2-via-spark-data.html',
  },
]
