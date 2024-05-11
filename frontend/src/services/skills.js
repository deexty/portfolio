import axios from "axios"

const buscaSkills = async () =>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/skills`);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const cadastraSkill = async (body) =>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/skills`, body);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const deletaSkill = async (id) =>{
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/skills/${id}`);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

export {buscaSkills,cadastraSkill,deletaSkill}