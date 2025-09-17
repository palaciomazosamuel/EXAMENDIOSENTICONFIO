/**
 * Controlador para la gestión de clientes.
 * @class ClienteController
 */
class ClienteController {
  constructor(useCase) { this.useCase = useCase; }
  /**
   * Crea un nuevo cliente.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Cliente creado.
   * @route POST /clientes
   */
  async create(req, res) {
    try {
      const cliente = await this.useCase.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (e) { res.status(400).json({ error: e.message }); }
  }
  /**
   * Obtiene todos los clientes.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Array} Lista de clientes.
   * @route GET /clientes
   */
  async getAll(req, res) {
    const clientes = await this.useCase.getClientes();
    res.json(clientes);
  }
  /**
   * Obtiene un cliente por su ID.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Cliente encontrado o error.
   * @route GET /clientes/:id
   */
  async getById(req, res) {
    const cliente = await this.useCase.getClienteById(req.params.id);
    if (cliente) res.json(cliente);
    else res.status(404).json({ error: 'No encontrado' });
  }
  /**
   * Actualiza los datos de un cliente.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Cliente actualizado.
   * @route PUT /clientes/:id
   */
  async update(req, res) {
    const cliente = await this.useCase.updateCliente(req.params.id, req.body);
    res.json(cliente);
  }
  /**
   * Elimina un cliente por su ID.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {void}
   * @route DELETE /clientes/:id
   */
  async delete(req, res) {
    await this.useCase.deleteCliente(req.params.id);
    res.status(204).send();
  }
}
module.exports = ClienteController;
