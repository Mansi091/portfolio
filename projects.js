window.projectsData = {
  'autodim-ai': {
    name: 'AutoDim AI / SolidWorks CAD Agent',
    badge: '',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/AutoDealer.git', primary: true }
    ],
    description: 'An agentic automation system that extracts design parameters from 3D models and automatically places engineering dimensions on SolidWorks 2D sheets following standard layout rules.',
    deep_dive: [
      'Manual detailing of engineering drawings in SolidWorks is time-consuming and highly prone to alignment inconsistencies. AutoDim AI automates this entire detaching and placement workflow by extracting geometric properties directly from 3D CAD models and applying professional drafting layouts.',
      'The application integrates directly with SolidWorks 2D/3D sheets via the COM API using pywin32. Spatial modeling data is analyzed by Llama-3 (Groq API) acting as a spatial placement agent, calculating coordinates dynamically to ensure zero overlap between annotations and drawing geometry.'
    ],
    highlights: [
      'Integrates directly with SolidWorks 2D/3D sheets via the COM API (pywin32) for deep software automation',
      'Leverages Llama-3 (Groq API) as an LLM agent to intelligently determine placement coordinates, preventing dimension overlap',
      'Triggers automatically via SolidWorks Task Scheduler to run batches of drawings unattended'
    ],
    stack: ['Python', 'SolidWorks COM API', 'pywin32', 'LLM Agent (Llama-3)', 'Groq API'],
    challenges: [
      { title: 'COM Interop Latency', text: 'Connecting directly with SolidWorks through pywin32 was bottlenecked by slow document traversing calls. Resolved by implementing geometric coordinates caching on initial parse, boosting detaching speed by 60%.' },
      { title: 'Dimension Overlap Prevention', text: 'Legacy CAD tools dimension randomly. AutoDim uses an AI agent to build a topological bounding grid map of components, finding coordinate corridors where dimensions sit perfectly clear of edge paths.' }
    ],
    impact: 'Automated drafting pipeline reduced layout drawing time from 20 minutes down to under 30 seconds per sheet, significantly freeing engineering drafting overhead.'
  },
  'medpulse-ai': {
    name: 'MedPulse AI',
    badge: 'Live',
    links: [
      { text: 'Live Demo ↗', url: 'https://medpulse-ai-wpjb.onrender.com', primary: true },
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/Medpulse--AI.git', primary: false }
    ],
    description: 'A Retrieval-Augmented Generation (RAG) platform designed for clinical document search, analysis, and medical image interpretation.',
    deep_dive: [
      'MedPulse AI is a multimodal clinical RAG and document intelligence platform. It processes medical PDFs and scans, performing semantic text chunking and extracting embedded medical images to create an interactive diagnostic lookup system.',
      'The engine indexes raw clinical scans, X-rays, and medical charts using Llama 4 Vision, mapping descriptions into a hybrid dense-sparse vector index. LangChain merges vector embeddings (ChromaDB) with keyword matching (BM25) to return medical anomalies.',
      'A query reformulation chain translates conversational follow-up inputs into context-complete standalone queries, allowing doctors to trace diagnostic files smoothly.'
    ],
    highlights: [
      'Multimodal Ingestion Pipeline: Processes PDFs and images (PNG, JPG, JPEG), performing semantic text chunking and extracting embedded images.',
      'Vision LLM Interpretation: Utilizes Llama 4 Vision to generate detailed annotations of clinical scans and X-rays, indexing them directly.',
      'Hybrid Search & Retrieval: Uses LangChain\'s EnsembleRetriever to fuse dense semantic vector search (ChromaDB + sentence-transformers) with sparse keyword matching (BM25).'
    ],
    stack: ['Llama 4 Vision', 'ChromaDB', 'BM25 Retriever', 'sentence-transformers', 'LangChain', 'FastAPI', 'PyMuPDF (fitz)', 'Python', 'Streamlit'],
    challenges: [
      { title: 'Variable Clinical Nomenclature', text: 'Doctors describe symptoms with different terms. We solved this by using an LLM-driven query reformulation chain that translates shorthand symptoms into medical concepts.' },
      { title: 'Extracting Embedded Images', text: 'Medical PDFs have drawings/X-rays embedded inside. Designed a custom ingestion pipeline using PyMuPDF (fitz) to crop and feed embedded visuals directly to Llama 4 Vision for indexing.' }
    ],
    impact: 'Served dynamic clinical search queries with under 150ms latency, creating a live diagnostic search console deployed on Render.'
  },
  'lexgenie': {
    name: 'LexGenie',
    badge: 'Live',
    links: [
      { text: 'Live Demo ↗', url: 'https://lexigenie.vercel.app', primary: true },
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/LexGenie', primary: false }
    ],
    description: 'An intelligent legal contract review assistant designed to detect risks, highlight missing clauses, identify internal contradictions, and chat dynamically with your legal documents.',
    deep_dive: [
      'LexGenie is a contract review workspace. It automates contract auditing by reading PDFs and searching for liability limits, non-standard compliance flags, and contradictory clauses.',
      'To make legal processing cost-effective, LexGenie runs classification, risk screening, and missing clause scans in a single LLM request. The pipeline cross-references legal terms (like unlimited IP indemnity against low overall liability caps) to prevent contract discrepancies.'
    ],
    highlights: [
      '75% Token Reduction: Executes classification, risks, and missing clause scans in a single LLM request.',
      'Cross-Section Contradiction Scanning: Cross-references the entire contract to flag conflicting terms (e.g., unlimited IP indemnity vs. low liability caps).',
      'Lightweight Chat Routing: Feeds only serialized analysis reports to the chatbot, saving 50% of chatbot prompt tokens.'
    ],
    stack: ['FastAPI', 'LangChain', 'pdfplumber', 'Groq Cloud (Llama 3.1 8B)', 'React.js (Vite)', 'Vanilla CSS'],
    challenges: [
      { title: 'Token Overflow & Cost', text: 'Processing hundreds of contract pages caused API token limit errors. Designed a context truncation guard that screens and chunks document contents safely without losing legal semantics.' },
      { title: 'Cross-Clause Discrepancies', text: 'Conflicting terms are often pages apart. Built a LangGraph relation matrix that maps matching legal dimensions and triggers an alert if constraints contradict.' }
    ],
    impact: 'Achieved a 75% token cost reduction for document screening and saved 50% of chatbot prompt tokens by using serialized report routing.'
  },
  'analystiq': {
    name: 'AnalystIQ',
    badge: '',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/AnalystIQ', primary: true }
    ],
    description: 'An interactive automated Data Science platform that combines a data-cleaning pipeline, AutoML, and an AI-powered conversational analyst. Upload tabular datasets, perform quick diagnostics, automatically train models, and chat with your data in real-time.',
    deep_dive: [
      'AnalystIQ serves as a business data science platform. Upon uploading a tabular dataset, the tool checks data quality (missing values, duplicate keys, outliers) and triggers an AutoML pipeline to select the best predictive model.',
      'Using LangChain, LangGraph, and Llama 3.1, users can query their dataset in natural language, ask the chatbot to plot custom charts, and download Markdown report summaries.'
    ],
    highlights: [
      'Data Preprocessing & Diagnostics: Automatically imputes missing values, drops duplicate entries, and filters outliers on upload.',
      'AutoML Engine: Uses FLAML to automatically classify ML tasks and train optimized models within a 30-second budget.',
      'Interactive AI Chatbot: Chat naturally with datasets powered by LangChain, LangGraph, and Groq Llama-3.1.'
    ],
    stack: ['FastAPI', 'LangChain', 'LangGraph', 'FLAML', 'Scikit-Learn', 'Pandas', 'React (Vite)', 'Tailwind CSS', 'Axios'],
    challenges: [
      { title: 'Model Selection Speed', text: 'Tuning ML models online can be too slow for web interfaces. Integrated Microsoft FLAML to run efficient model searches, guaranteeing optimized classifiers within a 30-second window.' },
      { title: 'Unstructured Data Formats', text: 'Datasets contain missing values and mixed formats. Built custom data cleaning modules to impute missing labels and clean string schemas before model training.' }
    ],
    impact: 'Developed a unified environment where business analysts can perform diagnostics, train ML models, and generate summary reports without writing code.'
  },
  'predictive-maintenance': {
    name: 'Predictive Maintenance & XAI Engine',
    badge: '',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/Predictive-Maintainance.git', primary: true }
    ],
    description: 'An end-to-end Machine Learning and REST API system designed to monitor industrial machine telemetry, predict imminent mechanical failures, and provide transparent explanations for predictions using Explainable AI (SHAP).',
    deep_dive: [
      'This predictive maintenance pipeline monitors machine telemetry sensors (Air temperature, Process temperature, Rotational speed, Torque, and Tool wear) to classify operational failure risks.',
      'Features are engineered using domain physics: `Power = Torque * Rotational Speed` and `Temp Difference = Process Temp - Air Temp` to draw clear boundaries. XGBoost with Stratified 5-Fold cross-validation predicts failure types, explained instantly using SHAP TreeExplainer.'
    ],
    highlights: [
      'Advanced Tabular Model: An XGBoost Classifier trained on stratified 5-fold cross-validation, outperforming standard dense neural networks.',
      'Domain-Driven Feature Engineering: Includes physical derived features (Power and Temp Difference) to guide decision boundaries.',
      'Precision Optimization: Uses precision-recall threshold tuning (threshold = 0.8615) to reduce false alarms by ~54% compared to default settings.',
      'Explainable AI (XAI): Employs SHAP TreeExplainer on the backend for near-instantaneous (under 1ms) feature contribution analysis.'
    ],
    stack: ['Python', 'XGBoost', 'FastAPI', 'Explainable AI (SHAP)', 'HTML/CSS', 'Scikit-Learn'],
    challenges: [
      { title: 'High Rate of False Alarms', text: 'Default classifiers triggered frequent false alarms. Optimized the precision-recall threshold to 0.8615, reducing false alarms by ~54% while keeping detection rates high.' },
      { title: 'Compute Latency for Explanations', text: 'Standard SHAP explainers took seconds. Switched to SHAP TreeExplainer on XGBoost trees, dropping query explanation times to under 1ms (a 98% latency reduction).' }
    ],
    impact: 'Achieved 82.4% precision and 74.6% recall on 10,000 telemetry logs, serving predictions and SHAP plots via an interactive dark-mode dashboard.'
  },
  'roadsense-ai': {
    name: 'RoadSense AI',
    badge: 'Live',
    links: [
      { text: 'Live Demo ↗', url: 'https://roadsense-severity.vercel.app/', primary: true },
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091', primary: false }
    ],
    description: 'Real-time accident severity prediction system combining historical records with live weather and geolocation data for explainable, interpretable risk assessment.',
    deep_dive: [
      'RoadSense AI is an accident forecasting application. By geocoding location inputs and calling live meteorological APIs, the app evaluates route safety and forecasts accident severity.',
      'The React frontend uses Axios to fetch geocoding data (Nominatim OpenStreetMap), weather logs (Open-Meteo), and driving route mapping (OSRM API). The backend is containerized in Docker, running accident prediction models with scaler assets.'
    ],
    highlights: [
      'Live Accident Risk Forecasting: Geocodes target locations, fetches live weather conditions, and predicts accident severity (Slight, Severe, or Fatal).',
      'Safe Route Planning: Evaluates start and destination coordinates to map the optimal driving route and journey safety rating.',
      'Interactive Dashboard & Sliders: Sliders fine-tune scenarios (vehicle age, driver age, vehicle count) to run instant "what-if" simulations.'
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'OSRM API', 'Open-Meteo', 'FastAPI', 'Scikit-Learn', 'Docker'],
    challenges: [
      { title: 'API Dependency Failures', text: 'Live meteorological requests can fail or time out. Implemented fallback heuristics that load local historical weather matrices to ensure continuous uptime.' },
      { title: 'Correlating Routing with Risk', text: 'Aligning route coordinates with geographic accident densities was slow. Pre-mapped road junctions and speed limits into bounding corridors, accelerating calculations.' }
    ],
    impact: 'Deployed a responsive route-safety dashboard on Vercel backed by a containerized FastAPI endpoint hosted on Hugging Face Spaces.'
  },
  'retail-pipeline': {
    name: 'Retail Data Intelligence Pipeline',
    badge: '',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/Retail-Data-Intelligence-Pipeline.git', primary: true }
    ],
    description: 'A cloud-native Data Engineering ETL (Extract, Transform, Load) pipeline that extracts raw transactions from Amazon S3, runs quality validation and cleaning, performs feature engineering, and loads the processed dataset and validation report back to Amazon S3.',
    deep_dive: [
      'This data pipeline performs pure cloud-to-cloud ETL. Transactions are extracted directly from AWS S3 buckets, processed in memory, and pushed back to processed S3 outputs.',
      'An in-memory validation runner tracks duplicates, null records, and returns, generating a CSV quality audit log. Processed records are cleaned and enriched with temporal columns (`Weekday`, `Quarter`, `Revenue`) to drive warehouse metrics.'
    ],
    highlights: [
      'Pure Cloud-to-Cloud Execution: Ingests raw data from S3 buckets and outputs clean files straight back to S3, bypassing local filesystems.',
      'In-Memory Data Validation: Screens quantities, customer ID nulls, returns, and duplicates, saving the audit report as a CSV.',
      'Docker Compose Orchestration: The entire execution context is containerized, enabling easy deployment and scheduling with a single command.'
    ],
    stack: ['Python', 'AWS S3', 'Boto3', 'Pandas', 'Docker', 'Docker Compose', 'ETL'],
    challenges: [
      { title: 'Memory Overhead on 540k Rows', text: 'Filtering transaction logs without a local disk caused memory limits. Designed memory-efficient pandas chunking queries to handle operations without local swap space.' },
      { title: 'Secure API Key Injection', text: 'Exposing AWS access keys in code is a security vulnerability. Designed environment configurations that inject keys dynamically into Docker Compose execution blocks.' }
    ],
    impact: 'Configured a containerized pipeline that automates ingestion, data cleaning, and S3 upload steps, saving audit logs for analytics.'
  },
  'retailpulse': {
    name: 'RetailPulse',
    badge: '',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/Mansi091/RetailPulse.git', primary: true }
    ],
    description: 'A comprehensive retail analytics dashboard designed to monitor store performance, track customer segmentation, and predict product demand trends using machine learning.',
    deep_dive: [
      'RetailPulse processes transactional datasets, cleans and validates transaction fields, loads them into PostgreSQL dimension tables, and trains a K-Means model to segment customer cohorts.',
      'Customer dimensions (`dim_customer`, `dim_product`, `dim_country`, `dim_date`) are loaded using SQLAlchemy. RFM metrics are log-scaled, standardized, and clustered to isolate high-value buyers.'
    ],
    highlights: [
      'Robust Ingestion & Validation: Reads over 540k transaction rows and generates a data-quality audit report tracking duplicates, missing customer IDs, negative values, and cancellations.',
      'Star Schema Dimension Modeling: Loads data into a PostgreSQL staging table and splits it into structured dimension tables (dim_customer, dim_product, dim_country, dim_date).',
      'ML Customer Segmentation: Extracts RFM metrics, handles features skewness using log-scaling, standardizes values, and trains a K-Means model to segment customers into value-based profiles.'
    ],
    stack: ['Python', 'PostgreSQL', 'SQLAlchemy', 'K-Means Clustering', 'Scikit-Learn', 'Power BI'],
    challenges: [
      { title: 'Optimizing Cohort Segment Count', text: 'Choosing K-values blindly results in weak clusters. Evaluated elbow curves and silhouette scores to select K=4 as the optimal segment count (achieving a score of 0.3369).' },
      { title: 'Normalizing Highly Skewed RFM Data', text: 'Financial values suffered from skewness. Applied logarithmic feature scaling and MinMaxScaler standardization, resulting in stable clusters.' }
    ],
    impact: 'Automated data warehouse creation and segmentation modeling using Docker Compose, feeding Power BI dashboards with cohort segment metrics.'
  },
  'hospiconnect': {
    name: 'HospiConnect',
    badge: 'Award Winner',
    links: [
      { text: 'GitHub ↗', url: 'https://github.com/ved-2/Hospiconnect.git', primary: true }
    ],
    description: 'An emergency healthcare coordination platform connecting patients, ambulances, and hospitals in real time — reducing emergency delays and improving ICU resource utilisation. Built across a web dashboard and two mobile apps (citizen + ambulance), with SOS dispatch, live GPS tracking, and AI-based symptom triage.',
    deep_dive: [
      'HospiConnect addresses delay bottlenecks in emergency responses and hospital ICU bed queries. The platform integrates a citizen SOS app, an ambulance navigation app, and an administrative hospital panel into a real-time health dashboard.',
      'An ambulance tracking module monitors vehicles on Leaflet maps. The citizen app uses Gemini AI to gauge symptom urgency. ICU availability and patient streams are coordinated through Firestore real-time queries.'
    ],
    highlights: [
      'Top 10 finalist out of 1,661 registrations — Wangoes Excellence Award, Prayatna 3.0 National Hackathon',
      '1st Runner-Up — Vyoma National Prototype Competition (Software Category)',
      '1st Runner-Up — 5th Regional Conclave, for innovation in healthcare technology'
    ],
    stack: ['Flutter', 'Next.js', 'Firebase', 'Firestore', 'Gemini AI', 'Leaflet', 'Tailwind CSS'],
    challenges: [
      { title: 'Unstable Network Support', text: 'During accidents, mobile network connectivity can be unreliable. We built local SOS offline storage and programmed an automatic SMS fallback coordinator when Firebase queries fail.' },
      { title: 'High-Frequency Location Updates', text: 'Streaming live GPS updates from active ambulances caused rapid Firebase read/write charge spikes. We throttled updates using geo-distance thresholds, reducing network load by 50% without affecting tracking smoothness.' }
    ],
    impact: 'Achieved recognition at multiple national hackathons and software prototype challenges for emergency workflow innovation.'
  }
};
