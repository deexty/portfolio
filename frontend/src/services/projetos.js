import axios from "axios"

const buscaProjetos = async () =>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/projetos`);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const buscaProjetoId = async (id) =>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/projetos/${id}`);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const filtraProjetosSkill = async (skill) =>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/projetos/filtrar/${skill}`);
    return response.data;
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const adicionaProjetos = async (body) =>{
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/projetos`, body);
    return response.data
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

const deletaProjeto = async (id) =>{
  console.log(`${import.meta.env.VITE_API_URL}/projetos/${id}`);
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/projetos/${id}`);
    return response.data
  } catch (error) {
    // Lidar com erros
    console.error('Erro ao fazer a solicitação:', error);
    throw error; // Propagar o erro para o chamador, se necessário
  }
}

export {buscaProjetos , buscaProjetoId, adicionaProjetos, deletaProjeto, filtraProjetosSkill}
